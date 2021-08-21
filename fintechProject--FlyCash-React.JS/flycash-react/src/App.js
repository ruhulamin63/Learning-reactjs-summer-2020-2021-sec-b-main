import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import donatePNG from "./black/img/icons/donate.png";
import transferPNG from "./black/img/icons/money.png";
import paymentPNG from "./black/img/icons/payment.png";
import rechargePNG from "./black/img/icons/recharge.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import Dashboard from "./components/customer/Dashboard";
import Password from "./components/customer/Password";
import Profile from "./components/customer/Profile";
import Addmoney from "./components/customer/transactions/addMoney";
import Donate from "./components/customer/transactions/Donate";
import TransactionList from "./components/customer/transactions/transactionlist";
import ErrorPage from "./components/Error404";

//=======================Start Officer Import File==============================

import AgentDetails from './components/officer/agent/AgentDetails';
import AgentEdit from './components/officer/agent/AgentEdit';
import AgentInvoice from './components/officer/agent/AgentInvoice';
import OfficerAgentTransaction from './components/officer/agent/AgentTransaction';
import CustomerDetails from './components/officer/customer/CustomerDetails';
import CustomerEdit from './components/officer/customer/CustomerEdit';
import CustomerInvoice from './components/officer/customer/CustomerInvoice';
import CustomerTransaction from './components/officer/customer/CustomerTransaction';

import OfficerDashboard from './components/officer/OfficerDashboard';
import ChangePassword from './components/officer/profile/ChangePassword';
import ProfileEdit from './components/officer/profile/ProfileEdit';
// import Profile from './components/officer/profile/Profile';

import Welcome from "./components/welcome";

import PrivateRoute from './PrivateRoute';
import PublicRouteOfficer from './PublicRouteOfficer';
//import PublicRoute from './PublicRoute';

import CustomerBlockList from './components/officer/customer/CustomerBlockList';

import AgentBlockList from './components/officer/agent/AgentBlockList';

import OfficerProfile from './components/officer/profile/Profile';



//=======================Admin================================


import AdminDashboard from "./components/admin/AdminDashboard";
import AddCampaign from "./components/admin/campaign/addCampaign";
import OngoingCampaign from "./components/admin/campaign/ongoingCampaign";
import RemoveCampaign from "./components/admin/campaign/removeCampaign";

import AdminRegister from "./components/admin/addComponent";

import AdminAddMoney from "./components/admin/agent/addMoney";

import BlockAgent from "./components/admin/agent/blockAgent";

import AgentList from "./components/admin/agent/agentList";

import BlockCustomer from "./components/admin/user/blockCustomer";
import TransactionDetails from "./components/admin/user/transactionDetails";

import BlockOfficer from "./components/admin/officer/blockOfficer";
import OfficerList from "./components/admin/officer/officerList";

import CustomerTransactionList from "./components/admin/user/customerTransactionList";
import CustomerList from "./components/admin/user/customerList";
import AdminCustomerEdit from "./components/admin/user/editCustomer";
import DiscountCode from "./components/admin/user/discountCode";
 //========================= Agent ===========================================
 import AgentDashboard from "./components/agent/AgentDashboard";
import AgentProfile from "./components/agent/AgentProfile";
import AgentProfileView from "./components/agent/AgentProfileView";
import AgentFeedback from "./components/agent/AgentFeedback";
import AgentAdduser from "./components/agent/AgentAdduser";
import AgentPassword from "./components/agent/AgentPassword";

import AgentTransactionList from "./components/agent/transactions/AgentTransactionlist";
import AgentAddmoney from "./components/agent/AgentAddmoney";

import takainAGN from "./black/img/agent/takain.png";
import takaoutAGN from "./black/img/agent/takaout.png";
import adduserAGN from "./black/img/agent/adduser.png";
import requestmoneyAGN from "./black/img/agent/reqMoney.png";
import paybillAGN from "./black/img/agent/paybill.png";
import transactionlistAGN from "./black/img/agent/transaction.png";
import rechargeAGN from "./black/img/agent/recharge.png";
import upcomingAGN from "./black/img/agent/comingsoon.png";

import bkashAGN from "./black/img/agent/BKash.png";
import nagadAGN from "./black/img/agent/Nagad.png";
import rocketAGN from "./black/img/agent/Rocket.png";
import surecashAGN from "./black/img/agent/surecash.png";
import upayAGN from "./black/img/agent/upay.jpg";
import bankcardAGN from "./black/img/agent/CreditCard.png";


import AgentTransaction from "./components/agent/transactions/AgentTransaction";

import AgentPayBill from "./components/agent/transactions/AgentPayBill";
import AgentAddmoneyCard from "./components/agent/transactions/AgentAddmoneyCard";

function App() {
  //========================= CUSTOMER ===========================================
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/customer/statement/:email">
            <TransactionList />
          </Route>

          {/* <Route exact path="/" component={Welcome}/>
          <PublicRoute exact path="/register" component={Register}/>
          <PublicRoute exact path="/login" component={Login}/> */}

          <PrivateRoute path="/customer-dashboard" component={Dashboard}/>

          <Route exact path="/customer-profile">
            <Profile />
          </Route>
          <Route exact path="/customer-change-password">
            <Password />
          </Route>
          <Route
            exact
            path="/customer/add-money"
            children={
              <Addmoney
                status="Add Money"
                imgpath={cashinPNG}
                buttonName="Add Money"
                numberType="Bank Account"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/send-money"
            children={
              <Addmoney
                status="Send Money"
                imgpath={sendPNG}
                buttonName="Send Money"
                numberType="FlyCash "
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/cash-out"
            children={
              <Addmoney
                status="Cash out"
                imgpath={cashoutPNG}
                buttonName="Cash out"
                numberType="Agent"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/payment"
            children={
              <Addmoney
                status="Payment"
                imgpath={paymentPNG}
                buttonName="Pay"
                numberType="Merchant"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/mobile-recharge"
            children={
              <Addmoney
                status="Mobile Recharge"
                imgpath={rechargePNG}
                buttonName="Recharge"
                numberType="Mobile"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/transfer-money"
            children={
              <Addmoney
                status="Transfer money"
                imgpath={transferPNG}
                buttonName="Transfer"
                numberType="Bank Account"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/donate"
            children={
              <Donate
                status="Donation"
                imgpath={donatePNG}
                buttonName="Donate"
                numberType="Select NGO's"
              />
            }
          ></Route>

          {/* ===========================================End Customer======================================= */}

          {/* ===========================================Start Officer Route======================================= */}

          {/* ===========================================Start Officer Route======================================= */}

          <Route exact path="/" component={Welcome}/>
          <PublicRouteOfficer exact path="/register" component={Register}/>
          <PublicRouteOfficer exact path="/login" component={Login}/>

          <PrivateRoute path="/officer-dashboard" component={OfficerDashboard}/> 

          <PrivateRoute path="/show-customer" component={CustomerDetails}/> 
          <PrivateRoute path="/edit-customer/:id" component={CustomerEdit}/>
          <PrivateRoute path="/transaction-customer" component={CustomerTransaction}/>

          <PrivateRoute path="/customer-blocklist" component={CustomerBlockList}/>


          <PrivateRoute path="/show-agent" component={AgentDetails}/>
          <PrivateRoute path="/edit-agent/:id" component={AgentEdit}/>
          <PrivateRoute path="/transaction-agent" component={OfficerAgentTransaction}/>

{/* 
          <PrivateRoute path="/view-profile" component={Profile}/> */}

          <PrivateRoute path="/agent-blocklist" component={AgentBlockList}/>

          <PrivateRoute path="/view-profile" component={OfficerProfile}/>

          <PrivateRoute path="/edit-profile/:id" component={ProfileEdit}/>

          <PrivateRoute path="/change-password/:id" component={ChangePassword}/>

          <PrivateRoute path="/agent-invoice" component={AgentInvoice}/>
          <PrivateRoute path="/customer-invoice/" component={CustomerInvoice}/>


{/* ===========================================End Officer Route======================================= */}

          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++ Admin +++++++++++++++++++++++++++++++++++*/}

          <Route exact path="/admin-dashboard">
            <AdminDashboard />
          </Route>

          <Route exact path="/admin-addCampaign">
            <AddCampaign />
          </Route>

          <Route exact path="/admin-ongoingCampaign">
            <OngoingCampaign />
          </Route>

          <Route exact path="/admin-removeCampaign">
            <RemoveCampaign />
          </Route>

          <Route exact path="/admin-addMoney">
            <AdminAddMoney />
          </Route>

          <Route exact path="/admin-blockAgent">
            <BlockAgent />
          </Route>

          <Route exact path="/admin-agentList">
            <AgentList />
          </Route>

          <Route exact path="/admin-customerList">
            <CustomerList />
          </Route>

          <Route exact path="/admin-blockCustomer">
            <BlockCustomer />
          </Route>

          <Route exact path="/admin-editCustomer/:id">
            <AdminCustomerEdit />
          </Route>

          <Route exact path="/admin-transactionDetails">
            <TransactionDetails />
          </Route>

          <Route exact path="/admin-customerTransactionList">
            <CustomerTransactionList />
          </Route>

          <Route exact path="/admin-blockOfficer">
            <BlockOfficer />
          </Route>

          <Route exact path="/admin-discountCode">
            <DiscountCode />
          </Route>

          <Route exact path="/admin-officerList">
            <OfficerList />
          </Route>

          <Route exact path="/admin-customerTransactionList">
            <CustomerTransactionList />
          </Route>

          <Route
            exact
            path="/admin-addCustomer"
            children={
              <AdminRegister
                status="Add Customer"
                type="customer"
                buttonName="Add Customer"
              />
            }
          ></Route>

          <Route
            exact
            path="/admin-addAgent"
            children={
              <AdminRegister
                status="Add Agent"
                type="agent"
                buttonName="Add Agent"
              />
            }
          ></Route>

          <Route
            exact
            path="/admin-addOfficer"
            children={
              <AdminRegister
                status="Add Officer"
                type="officer"
                buttonName="Add Officer"
              />
            }
          ></Route>
//============================================Agent===============================

<Route exact path="/agent/statement/:email">
            <AgentTransactionList />
          </Route>
          <Route exact path="/agent-addmoney">
            <AgentAddmoney />
          </Route>
          <Route exact path="/agent-agentprofile">
            <AgentProfile />
          </Route>
          <Route exact path="/agent-agentfeedback">
            <AgentFeedback />
          </Route>
          <Route exact path="/agent-agentadduser">
            <AgentAdduser />
          </Route>
          <Route exact path="/agent-agentprofileview">
            <AgentProfileView />
          </Route>
          <Route exact path="/agent-change-password">
            <AgentPassword />
          </Route>

          <Route exact path="/agent/agent-transactionlist">
            <AgentTransactionList  />
          </Route>
          
          <Route
            exact
            path="/agent/agent-cash-in"
            children={<AgentTransaction status="Cash In" imgpath={takainAGN} buttonName="Cash In" numberType='User ' />}
          ></Route>
          <Route
            exact
            path="/agent/agent-cash-out"
            children={<AgentTransaction status="Cash out" imgpath={takaoutAGN}  buttonName="Cash out" numberType='Agent'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-recharge"
            children={<AgentTransaction status="Mobile Recharge" imgpath={rechargeAGN}  buttonName="Recharge" numberType='Mobile'/>}
          ></Route> 
          <Route
            exact
            path="/agent/agent-paybill"
            children={<AgentPayBill status="Pay Bill" imgpath={paybillAGN} buttonName="Pay Bill"  numberType="Mobile Number"/>}
          ></Route>
          


          <Route
            exact
            path="/agent/agent-requestmoney"
            children={<AgentTransaction status="Request Money" imgpath={requestmoneyAGN}  buttonName="Request" numberType='Flycash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Bkash"
            children={<AgentTransaction status="Add Money(Bkash)" imgpath={bkashAGN}  buttonName="Add Money" numberType='Bkash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Nagad"
            children={<AgentTransaction status="Add Money(Nagad)" imgpath={nagadAGN}  buttonName="Add Money" numberType='Nagad'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Rocket"
            children={<AgentTransaction status="Add Money(Rocket)" imgpath={rocketAGN}  buttonName="Add Money" numberType='Rocket'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-SureCash"
            children={<AgentTransaction status="Add Money(SureCash)" imgpath={surecashAGN}  buttonName="Add Money" numberType='SureCash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Upay"
            children={<AgentTransaction status="Add Money(Upay)" imgpath={upayAGN}  buttonName="Add Money" numberType='Upay'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Card"
            children={<AgentAddmoneyCard status="Add Money(Card)" imgpath={bankcardAGN} buttonName="Add Money"  numberType="Card Holder Number"/>}
          ></Route>


//============================================end Route===============================
          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
