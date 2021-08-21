import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../layouts/sidebar/adminsSidebar";
import Navbar from "../layouts/navbars/CustomerNavbar";

import campaignPNG from "../../black/img/admin/campaign.png";
import removePNG from "../../black/img/admin/remove.png";
import ongoingCampaignPNG from "../../black/img/admin/ongoingCampaign.png";

import addUserPNG from "../../black/img/admin/addUser.png";
import editUserPNG from "../../black/img/admin/edit-info.png";
import userListPNG from "../../black/img/admin/userList.png";
import blockUserPNG from "../../black/img/admin/blockUser.png";
import discountCodePNG from "../../black/img/admin/discount-code.png";
import transactionHistoyPNG from "../../black/img/admin/transaction-history.png";

import agentPNG from "../../black/img/admin/agent.png";
import editAgentPNG from "../../black/img/admin/edit-info.png";
import blockAgentPNG from "../../black/img/admin/blockUser.png";
import chatAgentPNG from "../../black/img/admin/chat.png";
import addMoneyPNG from "../../black/img/admin/addMoney.png";

import officerPNG from "../../black/img/admin/officer.png";
import chatOfficerPNG from "../../black/img/admin/chat.png";
import editOfficerPNG from "../../black/img/admin/edit-info.png";
import blockOfficerPNG from "../../black/img/admin/blockUser.png";

function AdminDashboard() {
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
                    <h4 className="card-title">Profit :5000</h4>
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
                    <h2 className="card-title">Campaign</h2>
                  </div>
                </div>

                <div className="card-body all-icons"></div>
                <div className="row">
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <div className="d-flex justify-content-center">
                        <div className="pic">
                          <Link to="/admin-addCampaign">
                            <img src={campaignPNG}></img>
                            <div className="picname">
                              <h4>Add Campaign</h4>
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
                          <Link to="/admin-ongoingCampaign">
                            <img src={ongoingCampaignPNG}></img>
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
                          <Link to="/admin-removeCampaign">
                            <img src={removePNG}></img>
                            <div className="picname">
                              <h4>Remove Campaign</h4>
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
                            <img src={campaignPNG}></img>
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
        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
              <div className="card-header ">
                <div className="row">
                  <div className="col-sm-6 text-left">
                    <h2 className="card-title">Customer</h2>
                  </div>
                </div>

                <div className="card-body all-icons"></div>
                <div className="row">
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <div className="d-flex justify-content-center">
                        <div className="pic">
                          <Link to="/admin-addCustomer">
                            <img src={addUserPNG}></img>
                            <div className="picname">
                              <h4>Add Customer</h4>
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
                          <Link to="/admin-blockCustomer">
                            <img src={blockUserPNG}></img>
                            <div className="picname">
                              <h4>Block Customer</h4>
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
                          <Link to="/admin-blockCustomer">
                            <img src={editUserPNG}></img>
                            <div className="picname">
                              <h4>Edit Customer</h4>
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
                          <Link to="/admin-customerList">
                            <img src={userListPNG}></img>
                            <div className="picname">
                              <h4>Customer List</h4>
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
                          <Link to="/admin-discountCode">
                            {" "}
                            <img src={discountCodePNG}></img>
                            <div className="picname">
                              <h4>Discount Code</h4>
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
                          <Link to="/admin-customerTransactionList">
                            <img src={transactionHistoyPNG}></img>
                            <div className="picname">
                              <h4>Transaction List</h4>
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
        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
              <div className="card-header ">
                <div className="row">
                  <div className="col-sm-6 text-left">
                    <h2 className="card-title">Agent</h2>
                  </div>
                </div>

                <div className="card-body all-icons"></div>
                <div className="row">
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <div className="d-flex justify-content-center">
                        <div className="pic">
                          <Link to="/admin-addAgent">
                            <img src={agentPNG}></img>
                            <div className="picname">
                              <h4>Add Agent</h4>
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
                          <Link to="/admin-blockAgent">
                            <img src={editAgentPNG}></img>
                            <div className="picname">
                              <h4>Edit Agent</h4>
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
                          <Link to="/admin-blockAgent">
                            <img src={blockAgentPNG}></img>
                            <div className="picname">
                              <h4>Block Agent</h4>
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
                          <Link to="/admin-agentList">
                            <img src={userListPNG}></img>
                            <div className="picname">
                              <h4>Agent List</h4>
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
                          <Link href="{{ route('user-list') }}">
                            <img src={chatAgentPNG}></img>
                            <div className="picname">
                              <h4>Chat</h4>
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
                          <Link to="/admin-addMoney">
                            <img src={addMoneyPNG}></img>
                            <div className="picname">
                              <h4>Add MOney</h4>
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

        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
              <div className="card-header ">
                <div className="row">
                  <div className="col-sm-6 text-left">
                    <h2 className="card-title">Officer</h2>
                  </div>
                </div>

                <div className="card-body all-icons"></div>
                <div className="row">
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <div className="d-flex justify-content-center">
                        <div className="pic">
                          <Link to="/admin-addOfficer">
                            <img src={officerPNG}></img>
                            <div className="picname">
                              <h4>Add officer</h4>
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
                          <Link to="/admin-blockOfficer">
                            <img src={blockOfficerPNG}></img>
                            <div className="picname">
                              <h4>Block Officer</h4>
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
                          <Link to="/admin-blockOfficer">
                            <img src={editOfficerPNG}></img>
                            <div className="picname">
                              <h4>Edit Officer</h4>
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
                          <Link to="/admin-officerList">
                            <img src={userListPNG}></img>
                            <div className="picname">
                              <h4>Officer List</h4>
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
                          <Link href="{{ route('chat-officer') }}">
                            <img src={chatOfficerPNG}></img>
                            <div className="picname">
                              <h4>Chat</h4>
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

export default AdminDashboard;
