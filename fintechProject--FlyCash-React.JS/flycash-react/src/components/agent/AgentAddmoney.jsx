import React from "react";
import { Link } from "react-router-dom";
import AgentSideNav from "../layouts/sidebar/agentsSidebar";
import AgentNavbar from "../layouts/navbars/AgentNavbar";

import bkashAGN from "../../black/img/agent/BKash.png";
import nagadAGN from "../../black/img/agent/Nagad.png";
import rocketAGN from "../../black/img/agent/Rocket.png";
import surecashAGN from "../../black/img/agent/surecash.png";
import upayAGN from "../../black/img/agent/upay.jpg";
import bankcardAGN from "../../black/img/agent/CreditCard.png";



function AgentAddmoney() {
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
                      <h1 className="card-title">ADD MONEY</h1>
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
                            <Link to="/agent/agent-addmoney-Bkash">
                              <img src={bkashAGN}></img>
                              <div className="picname">
                                <h4>BKASH</h4>
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
                            <Link to="/agent/agent-addmoney-Nagad">
                              <img src={nagadAGN}></img>
                              <div className="picname">
                                <h4>NAGAD</h4>
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
                            <Link to="/agent/agent-addmoney-Rocket">
                              <img src={rocketAGN}></img>
                              <div className="picname">
                                <h4>ROCKET</h4>
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
                            <Link to="/agent/agent-addmoney-SureCash">
                              <img src={surecashAGN}></img>
                              <div className="picname">
                                <h4>SURECASH</h4>
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
                            <Link to="/agent/agent-addmoney-Upay">
                              <img src={upayAGN}></img>
                              <div className="picname">
                                <h4>UPAY</h4>
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
                            <Link to="/agent/agent-addmoney-Card">
                              <img src={bankcardAGN}></img>
                              <div className="picname">
                                <h4>BANK CARD</h4>
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

export default AgentAddmoney;
