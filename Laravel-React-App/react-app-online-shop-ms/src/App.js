import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Admin from './components/pages/Admin';
import Employee from './components/pages/Employee';
import AddProduct from './components/pages/AddProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/emp-register" component={Register}/>
        <Route path="/emp-login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/employee" component={Employee}/>
        <Route path="/add-product" component={AddProduct}/>
      </Switch>
    </Router>
  );
}

export default App;
