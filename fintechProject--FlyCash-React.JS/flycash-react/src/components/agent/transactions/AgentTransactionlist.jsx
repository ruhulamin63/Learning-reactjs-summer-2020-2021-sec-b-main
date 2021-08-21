import React, { useEffect, useState } from "react";
import "../../../App.css";
import AgentNavbar from "../../layouts/navbars/AgentNavbar";
import AgentSideNav from "../../layouts/sidebar/agentsSidebar";
import { getUser } from "../../auth/connect/getSession";
import AgentStatementsTableRow from "./AgentStatementsTableRow";
import logo from "../../../black/img/flycash.png";


const AgentTransactionList = () => {
  const user = getUser();
  let today = new Date();

  let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

  const [transList, setTransactionList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/agent/AgentTransactionlist").then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  }, []);
  return (
    <div className= "pdf">

    <AgentSideNav />
     <div className="main-panel ps" >
        <AgentNavbar />
      <div className= "content">
      <div className='row'>

          <div className ="details"> 
                  <table> 
                  <tr>
                  <td>
                  <h3> Print Date :{date}</h3>

                  <h4>Name : MD.Sabbir Hossain Borno</h4>
                  <h4>Email : Borno@gmail.com</h4>
                  <h4>Phone : +88017176653557</h4>
                  </td>
                  </tr>
                  </table>
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
                <div class="table-responsive-lg">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>Account Number</th>
                        <th>Transaction Type</th>
                        <th class="text-center">Transaction Amount</th>
                        <th class="text-center hideb">Current Balance</th>
                        <th class="text-center hideb">Total Profit</th>
                        <th class="text-center">Date</th>
                      </tr>
                    </thead>

                    {transList.map((u) => {
                      return <AgentStatementsTableRow key={u.id} {...u} />;
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
export default AgentTransactionList;
