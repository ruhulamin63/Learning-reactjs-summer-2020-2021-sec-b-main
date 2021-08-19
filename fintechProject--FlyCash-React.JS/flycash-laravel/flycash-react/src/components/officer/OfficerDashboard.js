import React from "react";
import SideNav from "../layouts/sidebar/OfficerSidebar";
import Navbar from "../layouts/navbars/OfficerNavbar";
import cashinPNG from "../../black/img/icons/cashin.png";
import sendPNG from "../../black/img/icons/sendmoney.png";
import addpropic from "../../black/img/addpropic.png";
import cashoutPNG from "../../black/img/icons/cashout.png";
import statementPNG from "../../black/img/icons/statement.png";
//import React, { Component } from 'react'
import { Link, useHistory } from "react-router-dom";
import { getUser, removeUserSession } from "../auth/connect/getSession";


//class OfficerDashboard extends Component {
function OfficerDashboard() {

    let history = useHistory();
    const user = getUser();
    
    const handleLogout = () => {
        removeUserSession();
         history.push('/login');
    }

   // render(){
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
                            <h4 className="card-title">Welcome to communication officer</h4>
                            <h5>{user.email}</h5>
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
                            <h2 className="card-title">View All Information</h2>
                            </div>
                        </div>

                        <div className="card-body all-icons"></div>
                        <div className="row">
                            <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                            <div className="font-icon-detail">
                                <div className="d-flex justify-content-center">
                                <div className="pic">
                                    <Link to="/show-customer">
                                    <img src={statementPNG}></img>
                                    <div className="picname">
                                        <h4>Customer Info</h4>
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
                                    <Link to="/show-agent">
                                    <img src={statementPNG}></img>
                                    <div className="picname">
                                        <h4>Agent Info</h4>
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
                                    <img src={cashoutPNG}></img>
                                    <div className="picname">
                                        <h4>Block List</h4>
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
                                    <Link to="/view-profile">
                                    <img src={addpropic}></img>
                                    <div className="picname">
                                        <h4>Profile</h4>
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
    //}
}

export default OfficerDashboard;
