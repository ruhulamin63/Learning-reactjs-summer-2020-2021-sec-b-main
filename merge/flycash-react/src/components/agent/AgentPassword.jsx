import React from "react";
import SideNav from "../layouts/sidebar/agentsSidebar";
import Navbar from "../layouts/navbars/AgentNavbar";
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
Row,
} from "reactstrap";

const AgentPassword = () => {
return (
    <>
    <div className="main-panel ps">
        <SideNav />
        <Navbar />
        <div className="content">
        <Row>
            <Col md="8">
            <Card>
                <CardHeader>
                <h2 className="title">Password Change</h2>
                </CardHeader>
                <CardBody>
                <Form>
                <form method="post" >
                    <div class="card-body">
                        <div class="form-group">
                            <label>Current Password</label>
                            <input type="password" name="old_password" class="form-control" placeholder="Current Password" value="" ></input>                          
                        </div>
                        <div class="form-group">
                            <label>New Password</label>
                            <input type="password" name="password" class="form-control" placeholder="New Password" value="" ></input>                           
                        </div>
                        <div class="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm New Password" value="" ></input>
                        </div>
                    
                    <div class="form-group">
                        <button type="submit" class="btn btn-fill btn-primary">Change Password</button>
                    </div>
                    </div>
                </form>
                </Form>
                </CardBody>
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
                    <h4 className="title">Md, Sabbir Hossain Borno</h4>
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

export default AgentPassword;