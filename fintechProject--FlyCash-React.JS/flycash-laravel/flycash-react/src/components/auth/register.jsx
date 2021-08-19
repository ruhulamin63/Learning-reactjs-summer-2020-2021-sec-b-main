import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../black/img/flycash.png";
import Footer from "../layouts/footer";
import GuestNav from "../layouts/navbars/guestNav";

const Register = () => {

      function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0,0);
        }, []);
      
        return null;
      }

      window.scrollTo(0, 0)
      const history = useHistory();
      const [msg, setMsg] = useState(" ");
      const [error, setError] = useState(" ");
      const [data, setData] = useState({
            
        name: '',
        email: '',
        password:'',
        password_confirmation:'',
        phone:'', 
        nid:'',
        dob:'',
        type:'', 
        //error:[]
    });
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setData({  ...data,[name]: [value]})
      console.log(name, value);
      
    }
      const register = async (e) => {
        e.preventDefault();
        const name =data.name.toString();
        const email =data.email.toString();
        const password=data.password.toString();
        const password_confirmation =data.password_confirmation.toString();
        const phone =data.phone.toString();
        const nid =data.nid.toString();
        const dob =data.dob.toString();
        const type =data.type.toString();
        const res = await axios.post('http://localhost:8000/api/users-register', { name: name,email:email,password: password,dob:dob,password_confirmation:password_confirmation,phone:phone,nid:nid,type:type});
        if (res.data.status === 200) {
            console.log(res.data.message);
            setMsg(res.data.message);
            setData({ 
              name: '',
              email: '',
              password:'',
              password_confirmation:'',
              phone:'', 
              nid:'',
              dob:'',
              type:'', 
            })
          
            setTimeout(() => { history.push('/login'); }, 2000);
            
        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            console.log(res.data.data)
            setData({
            name: '',
            email: '',
            password:'',
            password_confirmation:'',
            phone:'', 
            nid:'',
            dob:'',
            type:'',  
          })
          
        }
        else if (res.data.status === 422) {
          setMsg(res.data.message);
          console.log("hi");
          setData({ 
            name: '',
            email: '',
            password:'',
            password_confirmation:'',
            phone:'', 
            nid:'',
            dob:'',
            type:'', 
          })
      }
        else {
          setError(res.data.error);
          console.log(error);
          console.log(res.data.message);
        }
        e.stopPropagation();

    }
  return (
    <>
    <ScrollToTopOnMount />
      <GuestNav />
      <div className="wrapper ">
        <div className="full-page register-page">
          <div className="content">
            <div className=" container">
              <div class="row">
                <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                  <div align="center" class="card card-register card-white">
                    <div class="card-header">
                      <img src={logo} alt=""></img>
                      <h1 align="center" class="card-title">
                        {/* {msg} */}
                        Registration
                      </h1>
                    </div>
                    <form onSubmit={register} class="form" method="post">
                      <div class="card-body">
                        
                        <div class="input-group mb-5">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-single-02"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name"
                            onChange={handleInputChange}
                          ></input>
                          
                        </div>
                        <span className="text-danger">{error.name}</span>

                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-email-85"></i>
                            </div>
                          </div>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                            onChange={handleInputChange}
                          ></input>
                         
                        </div>
                        <span className="text-danger"> {error.email}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            onChange={handleInputChange}
                          ></input>
                          
                        </div>
                        <span className="text-danger"> {error.password}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password_confirmation"
                            class="form-control"
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                          ></input>
                          
                        </div>
                        <span className="text-danger"> {error.password_confirmation}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-mobile"></i>
                            </div>
                          </div>
                          <input
                            type="digit"
                            name="phone"
                            class="form-control"
                            placeholder="Phone Number"
                            onChange={handleInputChange}
                          ></input>
                          
                        </div>
                        <span className="text-danger"> {error.phone}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-badge"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            name="nid"
                            class="form-control"
                            placeholder="NID Number"
                            onChange={handleInputChange}
                          ></input>
                         
                        </div>
                        <span className="text-danger"> {error.nid}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-calendar-60"></i>
                            </div>
                          </div>
                          <input
                            type="date"
                            name="dob"
                            class="form-control"
                            placeholder="Date of Birth"
                            onChange={handleInputChange}
                          ></input>
                          
                        </div>
                        <span className="text-danger"> {error.dob}</span>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-single-02"></i>
                            </div>
                          </div>
                          <select
                            type="text"
                            name="type"
                            class="form-control"
                            placeholder="Account Type"
                            onChange={handleInputChange}
                          >
                            <option
                              value="admin"
                              name="admin"
                              placeholder="Account Type"
                            >
                              Admin
                            </option>
                            <option
                              value="customer"
                              name="customer"
                              placeholder="Account Type"
                            >
                              Customer
                            </option>
                            <option
                              value="agent"
                              name="agent"
                              placeholder="Account Type"
                            >
                              Agent
                            </option>
                            <option
                              value="officer"
                              name="communication_officer"
                              placeholder="Account Type"
                            >
                              Communication Officer
                            </option>
                            
                          </select>
                          
                        </div>
                        <span className="text-danger"> {error.type}</span>
                      </div>
                      <div class="card-footer">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block mb-5"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;