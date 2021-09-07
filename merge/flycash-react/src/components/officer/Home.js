import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{

    render(){

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Fintech FlyCash Dashboard
                                    {/* <Link to={'show-customer'} className="btn btn-primary btn-sm float-end">Customer</Link>
                                    <Link to={'show-agent'} className="btn btn-primary btn-sm float-end">agent</Link> */}
                                </h4>
                            </div>

                            <div className="card-body">
                               
                               <h2>Contract</h2>
                                <ul>
                                    <li><Link to={'show-customer'} className="btn btn-primary btn-sm">Customer</Link></li>
                                    <li> <Link to={'show-agent'} className="btn btn-primary btn-sm">Agent</Link></li>
                                </ul>

                                <h2>Setting</h2>
                                <ul>
                                    <li><Link to={'view-profile'} className="btn btn-primary btn-sm">Profile</Link></li>
                                    {/* <li> <Link to={'change-password'} className="btn btn-primary btn-sm">Change Password</Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;