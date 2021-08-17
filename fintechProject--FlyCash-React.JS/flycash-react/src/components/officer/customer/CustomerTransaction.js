import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';

class CustomerTransaction extends Component {

    state = {
        customers: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/transaction-customer');

       // console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                customers: res.data.customers,
                loding: false,    
            });
        }
    }
//======================================================================

    render(){

        var customer_transaction_table = "";

        if(this.state.loding){
            customer_transaction_table = <tr><td colSpan="8"><h2>loding...</h2></td></tr>
        }else{
            customer_transaction_table = 
            this.state.customers.map( (item)=> {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.transaction_type}</td>
                        <td>{item.amount}</td>
                        <td>{item.balance}</td>
                        <td>{item.date}</td>

                        <td>
                            <Link to={`customer-invoice`} className="btn btn-success btn-sm">pdf</Link>
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
                            <h4>Customer All Transaction Page</h4>
                        </div>

                        <div class="card-body">
                            
                            <h2>Transaction Data</h2>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Transaction Type</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                            <th>Date</th>
                                            <th>Print</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {customer_transaction_table}
                                    </tbody>
                                </table>

                                <Link to={'/show-customer'} className="btn btn-primary btn-sm float-end">Back</Link>
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
export default CustomerTransaction;
