import React from "react";
import { Link, useHistory } from "react-router-dom";
import SideNav from "../layouts/sidebar/customersSidebar";
import Navbar from "../layouts/navbars/CustomerNavbar";
import cashinPNG from "../../black/img/icons/cashin.png";
import sendPNG from "../../black/img/icons/sendmoney.png";
import paybillPNG from "../../black/img/paybill.png";
import rechargePNG from "../../black/img/icons/recharge.png";
import transferPNG from "../../black/img/icons/money.png";
import ticketPNG from "../../black/img/icons/ticket.png";
import statementPNG from "../../black/img/icons/statement.png";
import donatePNG from "../../black/img/icons/donate.png";
import paymentPNG from "../../black/img/icons/payment.png";
import cashoutPNG from "../../black/img/icons/cashout.png";
import campaignPNG from "../../black/img/icons/campaign.png";
import comingsoonPNG from "../../black/img/icons/comingsoon.png";
import { getEamil, removeUserSession } from "../auth/connect/getSession";

function Dashboard() {

  let history = useHistory();
    //const user = getEamil();

  const handleLogout = () => {
    removeUserSession();
     history.push('/login');
}

  return (
    
      <div className="main-panel ps">
      <SideNav />
      <Navbar />
      
        <div className="content">
          <div className="row"></div>
          <div className="row">
          
        
            <div className="col-12">
              <div className="card card-chart">
                <div className="card-header ">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <h2 className="card-title">DASHBOARD</h2>
                      <h4 className="card-title">Balance :5000</h4>
                      <input type="button" value="Logout" onClick={handleLogout}/>
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
                      <h2 className="card-title">Transaction</h2>
                    </div>
                  </div>

                  <div className="card-body all-icons"></div>
                  <div className="row">
                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                      <div className="font-icon-detail">
                        <div className="d-flex justify-content-center">
                          <div className="pic">
                            <Link href="{{ route('customer_addmoney') }}">
                              <img src={cashinPNG}></img>
                              <div className="picname">
                                <h4>Add Money</h4>
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
                            <Link href="{{ route('customer_sendmoney') }}">
                              <img src={sendPNG}></img>
                              <div className="picname">
                                <h4>Send Money</h4>
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
                            <Link href="{{ route('customer_cashout') }}">
                              <img src={cashoutPNG}></img>
                              <div className="picname">
                                <h4>Cash Out</h4>
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
                            <Link href="{{ route('customer_paybill') }}">
                              <img src={paymentPNG}></img>
                              <div className="picname">
                                <h4>Payment</h4>
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
                            <Link href="{{ route('customer_recharge') }}">
                              <img src={rechargePNG}></img>
                              <div className="picname">
                                <h4>Mobile Recharge</h4>
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
                            <Link href="{{ route('customer_transfermoney') }}">
                              <img src={transferPNG}></img>
                              <div className="picname">
                                <h4>Transfer Money</h4>
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
                            <Link href="{{ route('customer_sendmoney') }}">
                              <img src={ticketPNG}></img>
                              <div className="picname">
                                <h4>Buy Ticket</h4>
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
                            <Link href="{{ route('pages.transactionlist') }}">
                              <img src={statementPNG}></img>
                              <div className="picname">
                                <h4>Statement</h4>
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
                            <Link href="{{ route('customer_donation') }}">
                              <img src={donatePNG}></img>
                              <div className="picname">
                                <h4>Donation</h4>
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
                            <Link href="{{ route('admin_ongoingcampaign') }}">
                              <img src={campaignPNG}></img>

                              <div className="picname">
                                <h4>Ongoing Campaign</h4>
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
                            <Link href="#">
                              <img src={comingsoonPNG}></img>
                              <div className="picname">
                                <h4>Coming Soon</h4>
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
                            <Link href="#">
                              <img src={comingsoonPNG}></img>
                              <div className="picname">
                                <h4>Coming Soon</h4>
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

export default Dashboard;
