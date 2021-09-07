import React, { useEffect, useState } from "react";
import "../../../App.css";
// import Footer from "../../layouts/footer";
import AgentNavbar from "../../layouts/navbars/AgentNavbar";
import AgentSideNav from "../../layouts/sidebar/agentsSidebar";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import {setUserSession} from "../../auth/connect/getSession";

const AgentPayBill = (props) => {

    var email = "Borno@gmail.com";
    var transaction_type = props.status;
    
  let history = useHistory();
  const [transaction, setTransaction] = useState({
        
    phone:'',
    amount:'',
    password:''
});
const [msg, setMsg] = useState(" ");
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
            setTransaction({ event_name: '',
            phone:'',
            amount:'',
            password:'' })

        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            setTransaction({ transaction_type: '',
            phone:'',
            amount:'',
            password:'' })
            setUserSession(email,res.data.user_status);
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
                          alt="paybill"
                        ></img>
                      </a>
                      <h3>{transaction_type}</h3>
                      <spam role="alert">
                            {msg}
                        </spam>
                    </div>
                    
                  </p>
                  {/* <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      AgentPayBill();
                      history.push("/agent/statement");
                    }}
                  ></form> */}
                  <label>Bill Type</label>
                  <select  type="text" name="billtype" class="form-control">

                            <option value="Electric" name= "brac">Electric </option>
                            <option value="Gas" name= "1takayahar">Gas</option>
                            <option value="Water" name= "eshoShobai">Water </option>
                            <option value="Telephone" name= "mastul">Telephone </option>
                            <option value="Internet" name= "alter youth">Internet </option>
                              
                                  
                            </select>
                  

                  <label>Bill Number</label>
                  <input
                    type="text"
                    name="billNumber"
                    className="form-control"
                    placeholder="58749658"
                    value={transaction.billNumber}
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

                  <label>{props.numberType} Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={transaction.phone}
                    placeholder="+8801*********"
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
        {/* <Footer /> */}
      </div>
    </div>
    );
};

export default AgentPayBill;