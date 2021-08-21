import React, { useEffect, useState } from "react";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";
import { getUser } from "../../auth/connect/getSession";
import Navbar from "../../layouts/navbars/CustomerNavbar";
import SideNav from "../../layouts/sidebar/customersSidebar";
import StatementsTableRow from "./StatementsTableRow";


const TransactionList = () => {
  const user = getUser();
  let today = new Date();
  
let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  
  // const getTransactionList = () => {
  //   fetch("http://localhost:8000/api/customer/transactionlist/${user.email}").then(
  //     (response) => {
  //       response.json().then((result) => {
  //         setTransactionList(result);
  //       });
  //     }
  //   );
  // };
  
  const [search, setSearch] = useState("");
  const [transList, setTransactionList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/customer/transactionlist/${user.email}`).then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  }, []);
  return (
    <div className= "pdf">
    
    <SideNav />
    <Navbar />
     <div className="main-panel hide ps" >
     
     <div className= "content">
        
     
      <div className='row'>
          
          <div className ="details">
                  <h3> Print Date :{date}</h3>
  
                  <h4>Name :{user.name}</h4>
                  <h4>Email :{user.email}</h4>
                  <h4>Phone :{user.phone}</h4>
  
                </div>
          <img className='photo' src={logo}></img>
             </div>
     
        <div class="row" style={{right: "500px"}}>
          <div class="col-md-12">
            <div class="card ">
              <div class="card-header">
              <button onClick={() => window.print()} align="center" type="submit" class="btn btn-fill btn-primary"> Print</button>
                <h3 class="card-title"> Translation List</h3>
              </div>
              <div class="card-body">
              <input className="hideb  btn-primary btn-simple input-group" type="text"
                                placeholder="searching"
                                onChange={e => {setSearch(e.target.value)}}
                            />
                <div class="table-responsive-lg">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>Account Number</th>
                        <th>Transaction Type</th>
                        <th class="text-center">Transaction Amount</th>
                        <th class="text-center hideb">Current Balance</th>
                        <th class="text-center">Date</th>
                      </tr>
                    </thead>

                    {transList.filter((val) => {
                                            if (search == "") {
                                                return val
                                            }
                                            else if (val.transaction_type.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }else if (val.amount.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }else if (val.date.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }else if (val.phone.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }

                                            }).map((u) => {
                      return <StatementsTableRow key={u.id} {...u} />;
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    
  );
};
export default TransactionList;