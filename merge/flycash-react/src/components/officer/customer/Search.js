import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import axios from 'axios';

const CustomerDeatils = () => {

    const history = useHistory();
    const [event, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    //const [isEvent, setIsEvent] = useState([]);

    const mount= async()=>{

        const res = await axios.get('http://localhost:8000/api/show-customer');

        console.log(res.data);

        //var data = res.data.customers;
        
        if (res.data.status === 200) {
            setCustomers(res.data.customers)
        }
            
    }
    // const deleteCustomers = (e) => {
    //     console.log("deleted");
    //       setTimeout(() => { history.push('/customer/customersList'); }, 1000);
    // }
     useEffect(() => {
        mount();
        
     }, []);
     
    // const searchEvent = async (e) => {
    //     e.preventDefault();
    //     const res = await axios.get('http://localhost:8000/api/customerstList');
    // }

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
                            <h4>Customer View Page</h4>

                            <input type="text"
                                placeholder="searching"
                                onChange={e => {setSearch(e.target.value)}}
                            />
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
                                    {
                                        event.filter((val) => {
                                            if (search == "") {
                                                return val
                                            }
                                            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }

                                            }).map((e) => {

                                            return (
                                                <tr key={e.id} >
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.phone}</td>
                                                    <td>{e.nid}</td>
                                                    <td>{e.dob}</td>
                                                    <td>{e.balance}</td>
                                                    <td>{e.transaction_status}</td>
                                                    <td>{e.type}</td>

                                                    {/* <td>
                                                        {e.eventType === 2 ? 'Normal Event' : `${e.targetMoney}$`}
                                                        </td>
                                                    <td>{e.eventType ===1 ? 'Normal Event' : 'Volunteer Event'}</td> */}

                                                    <td>
                                                        <Link to={`details-customer/${e.id}`} className="btn btn-success btn-sm">View</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`edit-customer/${e.id}`} className="btn btn-success btn-sm">Edit</Link>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
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
export default CustomerDeatils;