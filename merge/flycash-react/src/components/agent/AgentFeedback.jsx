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
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const AgentFeedback = () => {
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
                  <h2 className="title">Feedback</h2>
                </CardHeader>
                <CardBody>
                  <Form>
                    
                    
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Write A Feedback</label>
                          <Input
                            cols="80"
                            defaultValue=""
                            placeholder="Here can be your feedback"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            
          </Row>
        </div>
      </div>
    </>
  );
};

export default AgentFeedback;
