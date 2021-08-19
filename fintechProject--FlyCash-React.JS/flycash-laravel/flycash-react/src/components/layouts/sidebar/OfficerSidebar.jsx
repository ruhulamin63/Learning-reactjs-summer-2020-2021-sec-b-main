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
        <img src={logo} alt=""></img>

        <ul className="nav">
          <li>
            <Link to="/officer-dashboard">
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
                  <Link to="show-customer">
                    <i className="tim-icons icon-coins"></i>

                    <p>Customers</p>
                  </Link>
                </li>
                <li>
                  <Link to="show-agent">
                    <i className="tim-icons icon-send"></i>
                    <p>Agents</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="tim-icons icon-money-coins"></i>
                    <p>Information</p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* <li>
            <Link to="#">
              <i className="tim-icons icon-single-02"></i>
              <p>Profile</p>
            </Link>
          </li> */}
          {/* <li>
            <Link to="#-">
              <i className="tim-icons icon-notes"></i>
              <p>Transaction List</p>
            </Link>
          </li> */}
          <li>
            <Link to="#">
              <i className="tim-icons icon-notes"></i>
              <p>Block List</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CustomersSidebar;
