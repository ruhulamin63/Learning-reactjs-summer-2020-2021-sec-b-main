import React from "react";
import { Link } from "react-router-dom";
import AgentSideNav from "../layouts/sidebar/agentsSidebar";
import AgentNavbar from "../layouts/navbars/AgentNavbar";

import takainAGN from "../../black/img/agent/takain.png";
import takaoutAGN from "../../black/img/agent/takaout.png";
import adduserAGN from "../../black/img/agent/adduser.png";
import requestmoneyAGN from "../../black/img/agent/reqMoney.png";
import paybillAGN from "../../black/img/agent/paybill.png";
import transactionlistAGN from "../../black/img/agent/transaction.png";
import rechargeAGN from "../../black/img/agent/recharge.png";
import upcomingAGN from "../../black/img/agent/comingsoon.png";

import { getUser, removeUserSession } from "../auth/connect/getSession";



function AgentDashboard() {

  const user = getUser();

  return (
    
      
      <div className="main-panel ps">
      <AgentSideNav />
      <AgentNavbar />
      
        <div className="content">
          <div className="row">
          
        
            <div className="col-12">
              <div className="card card-chart">
                <div className="card-header ">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <h2 className="card-title">DASHBOARD</h2>
                      <h4 className="card-title">Balance : {user.balance} TK</h4>
                      <h4 className="card-title">Profit : {user.profit} TK</h4>
                      {/* {user.balance} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-chart">
                <div className="card-header ">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                    </div>
                  </div>

                  <div className="card-body all-icons"></div>
                  <div className="row">
                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-cash-in">
                              <img src={takainAGN}></img>
                              <div className="picname">
                                <h4>CASH IN</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-cash-out">
                              <img src={takaoutAGN}></img>
                              <div className="picname">
                                <h4>CASH OUT</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                          <Link to="/agent-agentadduser">
                              <img src={adduserAGN}></img>
                              <div className="picname">
                                <h4>ADD CUSTOMER</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-requestmoney">
                              <img src={requestmoneyAGN}></img>
                              <div className="picname">
                                <h4>REQUEST MONEY</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-paybill">
                              <img src={paybillAGN}></img>
                              <div className="picname">
                                <h4>PAY BILL</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-transactionlist">
                              <img src={transactionlistAGN}></img>
                              <div className="picname">
                                <h4>TRANSACTION LIST</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="/agent/agent-recharge">
                              <img src={rechargeAGN}></img>
                              <div className="picname">
                                <h4>RECHARGE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="#">
                              <img src={upcomingAGN}></img>
                              <div className="picname">
                                <h4>UPCOMING FEATURE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="#">
                              <img src={upcomingAGN}></img>
                              <div className="picname">
                                <h4>UPCOMING FEATURE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="#">
                              <img src={upcomingAGN}></img>
                              <div className="picname">
                                <h4>UPCOMING FEATURE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="#">
                              <img src={upcomingAGN}></img>
                              <div className="picname">
                                <h4>UPCOMING FEATURE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link to="#">
                              <img src={upcomingAGN}></img>
                              <div className="picname">
                                <h4>UPCOMING FEATURE</h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>



                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default AgentDashboard;
