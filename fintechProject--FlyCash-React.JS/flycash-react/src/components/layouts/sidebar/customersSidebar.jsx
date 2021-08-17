import { useState } from "react";
import { Link } from "react-router-dom";
//import "../../../black/css/black-dashboard.css";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";

const CustomersSidebar = () => {
  const [method, setMethod] = useState(["add"]);
  return (
    <div className="sidebar" data="green">
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="logo">
          <img src={logo} alt=""></img>
          <Link to="/customer-dashboard" className="simple-text logo-normal">
            Dashboard
          </Link>
        </div>

        <ul className="nav">
          <li>
            <Link to="{{ route('customer_home'">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link data-toggle="collapse" aria-expanded="true">
              <i className="fab fa-laravel"></i>
              <span className="nav-link-text">Transactions</span>
              <b className="caret mt-1"></b>
            </Link>

            <div className="collapse show">
              <ul className="nav pl-4">
                <li>
                  <Link to="/customer/add-money">
                    <i className="tim-icons icon-coins"></i>

                    <p>Add Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="/customer/send-money">
                    <i className="tim-icons icon-send"></i>
                    <p>Send Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="/customer/cash-out">
                    <i className="tim-icons icon-money-coins"></i>
                    <p>Cash out</p>
                  </Link>
                </li>
                <li>
                  <Link to="/customer/payment">
                    <i className="tim-icons icon-credit-card"></i>
                    <p>Payment</p>
                  </Link>
                </li>

                <li>
                  <Link to="/customer/mobile-recharge">
                    <i className="tim-icons icon-mobile"></i>
                    <p>Mobile Recharge</p>
                  </Link>
                </li>
                <li>
                  <Link to="/customer/transfer-money">
                    <i className="tim-icons icon-bank"></i>
                    <p>Transfer Money</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="tim-icons icon-bus-front-12"></i>
                    <p>buy tickets</p>
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
export default CustomersSidebar;
