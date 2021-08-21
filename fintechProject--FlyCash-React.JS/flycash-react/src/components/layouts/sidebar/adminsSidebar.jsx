import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";

const AdminsSidebar = () => {
  const [method, setMethod] = useState(["add"]);
  return (
    <div className="sidebar" data="green">
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="logo">
          <img src={logo} alt=""></img>
          <Link to="/admin-dashboard" className="simple-text logo-normal">
            Dashboard
          </Link>
        </div>

        <ul className="nav">
          <li>
            <Link to="/admin-dashboard">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p>Features</p>
            </Link>
          </li>
          <li>
            <div className="collapse show">
              <ul className="nav pl-4">
                <li>
                  <Link to="/admin-addCustomer">
                    <i className="tim-icons icon-coins"></i>

                    <p>Add Customer</p>
                  </Link>
                </li>
                <li>
                  <Link to="/admin-addCampaign">
                    <i className="tim-icons icon-send"></i>
                    <p>Add Campaign</p>
                  </Link>
                </li>
                <li>
                  <Link to="/admin-agentList">
                    <i className="tim-icons icon-money-coins"></i>
                    <p>Agent List</p>
                  </Link>
                </li>
                <li>
                  <Link to="/admin-addMoney">
                    <i className="tim-icons icon-credit-card"></i>
                    <p>Add Money</p>
                  </Link>
                </li>

                <li>
                  <Link to="/admin-customerTransactionList">
                    <i className="tim-icons icon-mobile"></i>
                    <p>TransactionList</p>
                  </Link>
                </li>
                <li>
                  <Link to="/customer/transfer-money">
                    <i className="tim-icons icon-bank"></i>
                    <p>Discount Code</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="tim-icons icon-bus-front-12"></i>
                    <p>Block User</p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/customer/profile">
              <i className="tim-icons icon-single-02"></i>
              <p>User Profile</p>
            </Link>
          </li>
          <li>
            <Link to="/customer/statement">
              <i className="tim-icons icon-notes"></i>
              <p>Transaction List</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminsSidebar;
