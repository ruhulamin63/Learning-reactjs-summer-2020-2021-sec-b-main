import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import Sidebar from "../../layouts/sidebar/customersSidebar";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {setUserSession} from "../../auth/connect/getSession";

const Donate = (props) => {
//let history = useHistory();

var email = "joy@gmail.com";
var transaction_type = props.buttonName;

const history = useHistory();
const [transaction, setTransaction] = useState({
    
    phone:'',
    amount:'',
    password:''
});
const [notify, setNotify] = useState({
  isOpen: false,
  message: "",
  type: "",
});
const [msg, setMsg] = useState(" ");
const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransaction({  ...transaction,[name]: [value]})
    console.log(name, value);
    
}
    const maketransaction = async (e) => {
        e.preventDefault();
        const phone =transaction.phone.toString();
        const amount =transaction.amount.toString();
        const password =transaction.password.toString();
        const res = await axios.post('http://localhost:8000/api/transaction', { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email});
        // { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email}
        if (res.data.status === 200) {
            console.log(res.data.message);
            setMsg(res.data.message);
            setTransaction({ event_name: '',
            phone:'',
            amount:'',
            password:'' })
            setNotify({
              isOpen: true,
              messages: res.data.message,
              type: "success",
            });
            
            setTimeout(() => { history.push('/customer/transactionlist'); }, 3000);
             
        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            setTransaction({ transaction_type: '',
            phone:'',
            amount:'',
            password:'' })
            setUserSession(email,res.data.user_status);
            setNotify({
              isOpen: true,
              messages: res.data.message,
              type: "error",
            });
        }
        else {
            setMsg(res.data.message);
            setTransaction({transaction_type: '',
            phone:'',
            amount:'',
            password:''})
        }
        e.stopPropagation();
    
    }
    return (
        <div className="wrapper">
      <Sidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                
              <form onSubmit={maketransaction} >
                <div className="card-body">
                  <p className="card-text">
                    <div className="author">
                      <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div>

                      <a href="#">
                        <img
                          className="avatar"
                          src={props.imgpath}
                          alt="sendmoney"
                        ></img>
                      </a>
                      <h3>{props.status}</h3>
                      <h5>Donate with Flycash and contribute to help underprivileged people</h5>
                    </div>
                    <div class="alert alert-success" role="alert">
                            {msg}
                        </div>
                    
                  </p>
                  
                  <label>{props.numberType}</label>
                  <select  type="text" name="phone" value= {transaction.phone}onChange={handleInputChange} class="form-control">

                            <option value="Brac" name= "brac">Brac </option>
                            <option value="Ek Takay Ahar" name= "1takayahar" >Ek Takay Ahar</option>
                            <option value="Esho Shobai" name= "eshoShobai">Esho Shobai </option>
                            <option value="MASTUL Foundation" name= "mastul">MASTUL Foundation </option>
                            <option value="Alter Youth" name= "alter youth">Alter Youth </option>
                            <option value="Sajida Foundation" name= "sajida">Sajida Foundation</option>
                            </select>

                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="form-control"
                    placeholder="0.00"
                    value={transaction.amount}
                   onChange={handleInputChange}
                  ></input>

                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={transaction.password}
                   onChange={handleInputChange}
                  ></input>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    {props.buttonName}
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    );
};

export default Donate;