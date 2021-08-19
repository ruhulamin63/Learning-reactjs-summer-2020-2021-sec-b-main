import React from "react";
import StatementsTableRow from "./StatementsTableRow";
import "../../../App.css";
import SideNav from "../../layouts/sidebar/customersSidebar";
import Navbar from "../../layouts/navbars/CustomerNavbar";

const TransactionList = ({ list }) => {
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
                        <th class="text-center">Current Balance</th>
                        <th class="text-center">Date</th>
                      </tr>
                    </thead>

                    {list.map((u) => {
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
      </div>
  );
};
export default TransactionList;
