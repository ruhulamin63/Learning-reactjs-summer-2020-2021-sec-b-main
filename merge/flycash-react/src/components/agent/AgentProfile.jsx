import React from "react";
import AgentSideNav from "../layouts/sidebar/agentsSidebar";
import AgentNavbar from "../layouts/navbars/AgentNavbar";
import { getUser, removeUserSession } from "../auth/connect/getSession";
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

const AgentProfile = () => {
  const user = getUser();
  return (
    <>
      <div className="main-panel ps">
        <AgentSideNav />
        <AgentNavbar />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h2 className="title">Edit Profile</h2>
                </CardHeader>
                <CardBody>
                  <Form>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            name="name"
                            defaultValue={user.name}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            defaultValue="Borno@gmail.com"
                            placeholder="Enter Your Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Mobile Number</label>
                          <Input
                            defaultValue={user.phone}
                            placeholder="Enter Your Mobile Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                    
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("../../black/img/agent/anime6.png").default}
                      />
                      <h4 className="title">{user.name}</h4>
                    </a>
                    <h3 className="description">Agent</h3>
                  </div>
                  <div className="card-description">
                  FlyCash Agent Is The Webapp For One Of FlyCash’s Most Valued Sector.This Webapp Is The One-Stop 
                  Solution For Managing The Day-To-Day Activities And Transactions Of A FlyCash Agent.
                  </div>
                </CardBody>
                <CardFooter>
                  {/* <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
