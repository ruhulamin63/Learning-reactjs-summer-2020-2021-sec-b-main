import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import axios from 'axios';

const CustomerTransaction = () => {

    const history = useHistory();
    const [event, setCustomersTransaction] = useState([]);
    const [search, setSearch] = useState("");
    //const [isEvent, setIsEvent] = useState([]);

    const mount= async()=>{

        const res = await axios.get('http://localhost:8000/api/transaction-customer');

        console.log(res.data);

        //var data = res.data.customers;
        
        if (res.data.status === 200) {
            setCustomersTransaction(res.data.customers)
        }
            
    }

     useEffect(() => {
        mount();
        
     }, []);

    
//======================================================================

    //render(){
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
                            <input type="text"
                                    placeholder="searching"
                                    onChange={e => {setSearch(e.target.value)}}
                                />
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
                                        {
                                            event.filter((val) => {
                                                if (search == "") {
                                                    return val
                                                }
                                                else if (val.email.toLowerCase().includes(search.toLowerCase()))
                                                {
                                                    return val
                                                }

                                                }).map((item) => {
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
                                                                <Link to="/customer-invoice" className="btn btn-success btn-sm">pdf</Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                    <Link to={'/show-customer'} className="btn btn-primary btn-sm float-end">Back</Link>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    //}
};
export default CustomerTransaction;
