import { useState } from "react";
import { Link } from "react-router-dom";
//import "../../../black/css/black-dashboard.css";
import "../../../App.css";
import logo from "../../../black/img/flycash.png";

const AgentsSidebar = () => {
  const [method, setMethod] = useState(["add"]);
  return (
    <div className="sidebar" data="green">
      <div className="sidebar-wrapper ps">
        <div className="logo">
          <img src={logo} alt=""></img>
          <Link to="/agent-dashboard" className="simple-text logo-normal">
          <h3 align="center">AGENT</h3>
          </Link>
        </div>

        <ul className="nav">
          <li>
            <Link to="/agent-dashboard">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p>DASHBOARD</p>
            </Link>
          </li>

          <li>
            <Link to="/agent-addmoney">
              <i className="tim-icons icon-simple-add"></i>
              <p>ADD MONEY</p>
            </Link>
          </li>

          <li>
            <Link to="/agent-agentprofileview">
              <i className="tim-icons icon-badge"></i>
              <p>PROFILE</p>
            </Link>
          </li>

          <li>
          <Link to="/agent-agentprofile">
              <i className="tim-icons icon-pencil"></i>
              <p>EDIT PROFILE</p>
            </Link>
          </li>

          <li>
          <Link to="/agent-agentprofile">
              <i className="tim-icons icon-image-02"></i>
              <p>CHANGE PROFILE PICTURE</p>
            </Link>
          </li>

          <li>
          <Link to="/agent-change-password">
              <i className="tim-icons icon-key-25"></i>
              <p>CHANGE PASSWORD</p>
            </Link>
          </li>

          <li>
            <Link to="/agent-agentfeedback">
              <i className="tim-icons icon-puzzle-10"></i>
              <p>FEEDBACK</p>
            </Link>
          </li>

          <li>
            <Link to="/agent-dashboard">
              <i className="tim-icons icon-chat-33"></i>
              <p>CHAT</p>
            </Link>
          </li>

          
        </ul>
      </div>
    </div>
  );
};
export default AgentsSidebar;
