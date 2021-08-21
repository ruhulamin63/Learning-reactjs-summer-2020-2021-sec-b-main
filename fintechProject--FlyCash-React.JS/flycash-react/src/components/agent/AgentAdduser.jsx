// import React from "react";
import SideNav from "../layouts/sidebar/agentsSidebar";
import Navbar from "../layouts/navbars/AgentNavbar";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const AgentAdduser = () => {

  // function ScrollToTopOnMount() {
  //   useEffect(() => {
  //     window.scrollTo(0,0);
  //   }, []);
  
  //   return null;
  // }

  // window.scrollTo(0, 0)
  const history = useHistory();
  const [msg, setMsg] = useState(" ");
  const [error, setError] = useState(" ");
  const [data, setData] = useState({
        
    name: '',
    email: '',
    password:'',
    password_confirmation:'',
    phone:'', 
    nid:'',
    dob:'',
    type:'', 
    //error:[]
});
const handleInputChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setData({  ...data,[name]: [value]})
  console.log(name, value);
  
}
  const type = "customer"
  const agentAdduser = async (e) => {
    e.preventDefault();
    const name =data.name.toString();
    const email =data.email.toString();
    const password=data.password.toString();
    const password_confirmation =data.password_confirmation.toString();
    const phone =data.phone.toString();
    const nid =data.nid.toString();
    const dob =data.dob.toString();
    const res = await axios.post('http://localhost:8000/api/users-addUser', { name: name,email:email,password: password,dob:dob,password_confirmation:password_confirmation,phone:phone,nid:nid,type:type});
    if (res.data.status === 200) {
        console.log(res.data.message);
        setMsg(res.data.message);
        setData({ 
          name: '',
          email: '',
          password:'',
          password_confirmation:'',
          phone:'', 
          nid:'',
          dob:'',
          type:'', 
         })
      
        setTimeout(() => { history.push('/agent-agentadduser'); }, 2000);
         
    }
    else if (res.data.status === 240) {
        setMsg(res.data.message);
        console.log(res.data.message);
        setData({
        name: '',
        email: '',
        password:'',
        password_confirmation:'',
        phone:'', 
        nid:'',
        dob:'',
        type:'',  
      })
      
    }
    else if (res.data.status === 422) {
      setMsg(res.data.message);
      console.log("hi");
      setData({ 
        name: '',
        email: '',
        password:'',
        password_confirmation:'',
        phone:'', 
        nid:'',
        dob:'',
        type:'', 
      })
  }
    else {
      setError(res.data.error);
      console.log(error);
      console.log(res.data.message);
    }
    e.stopPropagation();

}
  return (
    <>
      <div className="main-panel ps">
        <SideNav />
        <Navbar />
        <div className="content">
          <Row>
            <Col >
              <Card>
                
                <CardHeader>
                  <h2 className="title">Add Customer</h2>
                </CardHeader>
                <CardBody>
                  

                  <Form onSubmit={agentAdduser} class="form" method="post">

                  <Row>
                  <Col align="center">
                  <Card className="card-user">
                  <CardBody>
                  <CardText />
                  <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <h3 role="alert">
                            {msg}
                        </h3>
                  <h6 className="description">Please Add Your Photo</h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("../../black/img/agent/addpropic.png").default}
                        />
                      </a>
                      <h3 className="description">Customer</h3>
                    </div>
                  <div className="card-description">
                  FlyCash Agent Is The Webapp For One Of FlyCash’s Most Valued Sector.This Webapp Is The One-Stop 
                  Solution For Managing The Day-To-Day Activities And Transactions Of A FlyCash Agent.
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            placeholder="Enter User's Full Name"
                            name="name"
                            type="text"
                            class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger">{error.name}</span>
                        
                      </Col>
                      
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            placeholder="Enter User's Email"
                            type="email"
                            name="email"
                            class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.email}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Mobile Number</label>
                          <Input
                            placeholder="+8801*********"
                            type="digit"
                            name="phone"
                            class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.phone}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>NID Number</label>
                          <Input
                            placeholder="8745963258"
                            type="text"
                            name="nid"
                    class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.nid}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            placeholder="02-04-1996"
                            type="date"
                    name="dob"
                    class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.dob}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Enter Password"
                            type="text"
                    name="password"
                    class="form-control"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.password}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Confirm Password</label>
                          <Input
                            placeholder="Re-Type-Password"
                            type="text"
                            name="password_confirmation"
                    class="form-control"
                            onChange={handleInputChange}
                          />
                          <span className="text-danger"> {error.password_confirmation}</span>
                           <div class="form-group">
                        <button type="submit" class="btn btn-fill btn-primary">Add Customer</button>
                  </div>
                        </FormGroup>
                        
                      </Col>
                    </Row>

                   

                    
                  </Form>
                  
                  

                </CardBody>
              </Card>
            </Col>

            
            
          </Row>
        </div>
      </div>
    </>
  );
};


export default AgentAdduser;

