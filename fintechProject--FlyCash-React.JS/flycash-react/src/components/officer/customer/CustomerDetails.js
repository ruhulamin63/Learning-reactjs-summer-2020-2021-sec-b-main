import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';

class CustomerDeatils extends Component {

    state = {
        customers: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/show-customer');

        //console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                customers: res.data.customers,
                loding: false,    
            });
        }
    }

//======================================================================

    render(){

        var customer_table = "";

        if(this.state.loding){
            customer_table = <tr><td colSpan="11"><h2>loding...</h2></td></tr>
        }else{
            customer_table = 
            this.state.customers.map( (item)=> {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.nid}</td>
                        <td>{item.dob}</td>
                        <td>{item.balance}</td>
                        <td>{item.transaction_status}</td>
                        <td>{item.type}</td>

                        <td>
                            <Link to={`details-customer/${item.id}`} className="btn btn-success btn-sm">View</Link>
                        </td>
                        <td>
                            <Link to={`edit-customer/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div>
            <div className="wrapper">
            <SideNav />
            <div className="main-panel ps" >
                <Navbar />
            <div className= "content">
                <div class="row" style={{ right: "500px" }}>
                <div class="col-md-12">
                    <div class="card ">
                    <div class="card-header">
                        <h4>Customer View Page
                            
                        </h4>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive-lg">
                            <h2>Customer Data</h2>

                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>NID</th>
                                        <th>DOB</th>
                                        <th>Balance</th>
                                        <th>TS</th>
                                        <th>Type</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
        
                                <tbody>
                                    {customer_table}
                                </tbody>
                            </table>

                            <Link to={'/officer-dashboard'} className="btn btn-primary btn-sm float-end">Back</Link>
                            <Link to={'/transaction-customer'} className="btn btn-primary btn-sm float-end">All Transaction</Link>
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
};
export default CustomerDeatils;
