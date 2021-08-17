import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import paymentPNG from "./black/img/icons/payment.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import register from "./components/auth/register";
import login from "./components/auth/login";
import Dashboard from "./components/customer/Dashboard";
import Addmoney from "./components/customer/transactions/addMoney";
import TransactionList from "./components/customer/transactions/transactionlist";
import Welcome from "./components/welcome";


//=======================Start Officer Import File==============================

import OfficerDashboard from './components/officer/OfficerDashboard';

import CustomerDetails from './components/officer/customer/CustomerDetails';
import CustomerEdit from './components/officer/customer/CustomerEdit';
import CustomerTransaction from './components/officer/customer/CustomerTransaction';

import AgentDetails from './components/officer/agent/AgentDetails';
import AgentEdit from './components/officer/agent/AgentEdit';
import AgentTransaction from './components/officer/agent/AgentTransaction';

import Profile from './components/officer/profile/Profile';
import ProfileEdit from './components/officer/profile/ProfileEdit';
import ChangePassword from './components/officer/profile/ChangePassword';

import AgentInvoice from './components/officer/agent/AgentInvoice';
import CustomerInvoice from './components/officer/customer/CustomerInvoice';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

//=======================End Officer Import File================================


function App() {
  //========================= CUSTOMER ===========================================
  const getTransactionList = () => {
    fetch("http://localhost:8000/api/customer/transactionlist").then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  };
  const [transList, setTransactionList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/customer/transactionlist").then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  }, []);
  return (
    <>
      {console.log(transList)}
      
      <Router>
        <Switch>
          <Route exact path="/customer/statement">
            <TransactionList list={transList} />
          </Route>

          <Route exact path="/" component={Welcome}/>
          <PublicRoute exact path="/register" component={Register}/>
          <PublicRoute exact path="/login" component={Login}/>

          <PrivateRoute exact path="/customer-dashboard" component={Dashboard}/>

          <Route
            exact
            path="/customer/add-money"
            children={<Addmoney status="Add Money" imgpath={cashinPNG}  numberType='Bank Account'/>}
          ></Route>
          <Route
            exact
            path="/customer/send-money"
            children={<Addmoney status="Send Money" imgpath={sendPNG} numberType='FlyCash ' />}
          ></Route>
          <Route
            exact
            path="/customer/cash-out"
            children={<Addmoney status="Cash out" imgpath={cashoutPNG}  numberType='Agent'/>}
          ></Route>
          <Route
            exact
            path="/customer/payment"
            children={<Addmoney status="Payment" imgpath={paymentPNG}  numberType='Merchant'/>}
          ></Route>
          <Route
            exact
            path="/customer/mobile-recharge"
            children={<Addmoney status="Mobile Recharge" imgpath={paymentPNG}  numberType='Merchant'/>}
          ></Route>

{/* ===========================================End Customer======================================= */}


{/* ===========================================Start Officer Route======================================= */}

          <PrivateRoute exact path="/officer-dashboard" component={OfficerDashboard}/> 

          <PrivateRoute exact path="/show-customer" component={CustomerDetails}/> 
          <PrivateRoute exact path="/edit-customer/:id" component={CustomerEdit}/>
          <PrivateRoute exact path="/transaction-customer" component={CustomerTransaction}/>

          <PrivateRoute exact path="/show-agent" component={AgentDetails}/>
          <PrivateRoute exact path="/edit-agent/:id" component={AgentEdit}/>
          <PrivateRoute exact path="/transaction-agent" component={AgentTransaction}/>

          <PrivateRoute exact path="/view-profile" component={Profile}/>
          <PrivateRoute exact path="/edit-profile/:id" component={ProfileEdit}/>

          <PrivateRoute exact path="/change-password/:id" component={ChangePassword}/>

          <PrivateRoute exact path="/agent-invoice" component={AgentInvoice}/>
          <PrivateRoute exact path="/customer-invoice" component={CustomerInvoice}/>

{/* ===========================================End Officer Route======================================= */}
          

          <Route path="*">404 not found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
