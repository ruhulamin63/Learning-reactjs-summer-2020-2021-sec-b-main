import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import axios from "axios";
import addMoneyPNG from "../../../black/img/admin/addMoney.png";

import { useHistory } from "react-router-dom";

const AdminAddMoney = (props) => {
  //let history = useHistory();
  var email = "shahrearfaiyaz@gmail.com";
  var transaction_type = props.status;

  let history = useHistory();
  const [transaction, setTransaction] = useState({
    phone: "",
    amount: "",
    password: "",
  });
  const [msg, setMsg] = useState(" ");
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransaction({ ...transaction, [name]: [value] });
    console.log(name, value);
  };
  const addMoney = async (e) => {
    e.preventDefault();
    const phone = transaction.phone.toString();
    const amount = transaction.amount.toString();
    const password = transaction.password.toString();
    const res = await axios.post("http://localhost:8000/api/addmoneytoagent", {
      transaction_type: transaction_type,
      phone: phone,
      amount: amount,
      password: password,
      email: email,
    });
    // { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email}
    if (res.data.status === 200) {
      console.log(res.data.message);
      alert(res.data.message);
      setMsg(res.data.message);
      setTransaction({ event_name: "", phone: "", amount: "", password: "" });
    } else if (res.data.status === 240) {
      alert(res.data.message);
      setTransaction({
        transaction_type: "",
        phone: "",
        amount: "",
        password: "",
      });
      //setUserSession(email,res.data.user_status);
    } else {
      setMsg(res.data.message);
      alert(res.data.message);
      setTransaction({
        transaction_type: "",
        phone: "",
        amount: "",
        password: "",
      });
    }
    e.stopPropagation();
  };

  return (
    <div className="wrapper">
      <AdminsSidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                <form onSubmit={addMoney}>
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
                            src={addMoneyPNG}
                            alt="Campaign"
                          ></img>
                        </a>
                        <h3>{props.status}</h3>
                      </div>
                    </p>

                    <label>{props.numberType} Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="+8801*********"
                      onChange={handleInputChange}
                    ></input>

                    <label>Amount</label>
                    <input
                      type="text"
                      name="amount"
                      className="form-control"
                      placeholder="0.00"
                      onChange={handleInputChange}
                    ></input>

                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="******"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div class="card-footer">
                    <button type="submit" className="btn btn-fill btn-primary">
                      Add Money
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

export default AdminAddMoney;
