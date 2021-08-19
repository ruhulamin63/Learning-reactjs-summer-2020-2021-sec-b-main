
import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import cashinPNG from '../../../black/img/icons/cashin.png';
import Footer from '../../layouts/footer';
import NavBar from '../../layouts/navbars/CustomerNavbar';
import Sidebar from '../../layouts/sidebar/customersSidebar'


const sendMoney = ({status,}) => {
    
    
    return (
         
        < div className ="wrapper">
        <Sidebar/>
        <div className="main-panel ps">
            <NavBar/>
            <div className = "content">
            <div className="d-flex justify-content-center">
      <div className="col-md-4">
          <div className="card card-user">
          <form>
              <div className="card-body">
              
                  <p className="card-text">
                  
                      <div className="author">
                          <div className="block block-one"></div>
                          <div className="block block-two"></div>
                          <div className="block block-three"></div>
                          <div className="block block-four"></div>
                          
                          <a href="#">
                              <img className="avatar" src={cashinPNG} alt="sendmoney"></img>
                              </a>
                              <h3 >{status}</h3>
                              </div>
                      
                  </p>

                  <label>AccountNumber</label>
                  <input type="text" name="phone" className="form-control" placeholder="+8801*********"></input>

                  <label>Amount</label>
                  <input type="text" name="amount" className="form-control" placeholder="0.00"></input>
                  
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="******"></input>
              </div>

              <div class="card-footer">
                      <button type="submit" className="btn btn-fill btn-primary">{status}</button>
                  </div>
                  </form>
                  
              </div>
                  </div>
          </div>
    

            </div>
            <Footer/>
        </div>
      
    </div>
    );
};

export default sendMoney;