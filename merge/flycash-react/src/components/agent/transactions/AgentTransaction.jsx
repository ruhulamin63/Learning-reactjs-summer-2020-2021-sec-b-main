
import React, { useState } from "react";
import "../../../App.css";
// import Footer from "../../layouts/footer";
import AgentNavbar from "../../layouts/navbars/AgentNavbar";
import AgentSideNav from "../../layouts/sidebar/agentsSidebar";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import {setUserSession} from "../../auth/connect/getSession";

const AgentTransaction = (props) => {
    var email = "Borno@gmail.com";
    var transaction_type = props.status;

    const history = useHistory();
    const [transaction, setTransaction] = useState({
        
        phone:'',
        amount:'',
        password:'',
        error:[]
    });
    const [msg, setMsg] = useState(" ");
    const [error, setError] = useState(" ");
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTransaction({  ...transaction,[name]: [value]})
        console.log(name, value);
        
    }
        const agentTransaction = async (e) => {
            e.preventDefault();
            const phone =transaction.phone.toString();
            const amount =transaction.amount.toString();
            const password =transaction.password.toString();
            const res = await axios.post('http://localhost:8000/api/transaction', { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email});
            // { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email}
            if (res.data.status === 200) {
                console.log(res.data.message);
                setMsg(res.data.message);
                console.log(res.data.data)
                setTransaction({ transaction_type: '',
                phone:'',
                amount:'',
                password:'' })
                setUserSession(email,res.data.user_status);

            }
            else if (res.data.status === 240) {
              setMsg(res.data.message);
              console.log(res.data.data)
                setTransaction({ transaction_type: '',
                phone:'',
                amount:'',
                password:'' })
            }
                
                else if (res.data.status === 422) {
                  setMsg(res.data.message);
                  console.log("hi");
                  setTransaction({ transaction_type: '',
                  phone:'',
                  amount:'',
                  password:'' })
              }
                else {
                  setError(res.data.error);
                  console.log(error);
                }
                e.stopPropagation();
            
            }

  // let history = useHistory();
  // const addmoney = () => {
  //   var email = "Borno@gmail.com";
  //   fetch("http://localhost:8000/api/customer/addmoney/" + email, {
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       alert(props.status + "success");
  //       getTransactionList();
  //     });
  //   });
  // };
  // const getTransactionList = () => {
  //   fetch("http://localhost:8000/api/agent/AgentTransactionlist").then(
  //     (response) => {
  //       response.json().then((result) => {
  //         setTransactionList(result);
  //       });
  //     }
  //   );
  // };
  // const [transList, setTransactionList] = useState([]);

  // const AgentTransactionProcces = () => {
  //   var email = "Borno@gmail.com";
  //   fetch("http://localhost:8000/agent/AgentTransaction/" + email, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       alert(props.status + "success");
  //       getTransactionList();
  //     });
  //   });
  // };

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/agent/AgentTransactionlist").then((response) => {
  //     response.json().then((result) => {
  //       getTransactionList(result);
  //     });
  //   });
  // }, []);

  return (
    <div className="wrapper">
      <AgentSideNav />
      <div className="main-panel ps">
        <AgentNavbar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
              <form onSubmit={agentTransaction} >
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
                      <h3>{transaction_type}</h3>
                      <spam role="alert">
                            {msg}
                        </spam>
                    </div>
                  </p>
                  <label>{props.numberType} Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={transaction.phone}
                    placeholder="+8801*********"
                   onChange={handleInputChange}
                  ></input>

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

                <div class="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    {props.buttonName}
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AgentTransaction;
