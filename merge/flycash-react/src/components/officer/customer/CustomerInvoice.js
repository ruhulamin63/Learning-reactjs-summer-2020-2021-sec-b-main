import React, { useEffect, useState } from "react";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";
import { getUser } from "../../auth/connect/getSession";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


const TransactionList = () => {

  const user = getUser();

  let today = new Date();
  
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    const [event, setCustomersTransaction] = useState([]);

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
    
    return (
        <div className= "pdf">
        
        <SideNav />
        <Navbar />
        <div className="main-panel hide ps" >
        
        <div className= "content">
            
        
        <div className='row' >
            
            <div className ="details">
                <h3> Print Date :{date}</h3>
                <h4>Name :{user.name}</h4>
                <h4>Email :{user.email}</h4>
                <h4>Phone :{user.phone}</h4>
            </div>
                <img className='photo' src={logo}></img>
            </div>
        
            <div class="row">
            <div class="col-md-12">
                <div class="card ">
                <div class="card-header">
                   
                    <h3 class="card-title"> Translation List</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive-lg">

                    <table class="table tablesorter">
                        <thead class=" text-primary">
                            <tr>
                                <th>Account Number</th>
                                <th>Transaction Type</th>
                                <th>Transaction Amount</th>
                                <th>Current Balance</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                event.map((e) => {

                                    return (
                                        <tr key={e.id} >
                                        
                                            <th>{e.phone}</th>
                                            <th>{e.transaction_type}</th>
                                            <th>{e.amount}</th>
                                            <th>{e.balance}</th>
                                            <th>{e.date}</th>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
                <Link to={'/transaction-customer'}  class="btn btn-primary btn-sm float-end">Back</Link>
                <button onClick={() => window.print()} align="center" type="submit" class="btn btn-primary btn-sm float-end"> Print</button>
            </div>
        </div>
      </div>
      </div>
  );
};
export default TransactionList;