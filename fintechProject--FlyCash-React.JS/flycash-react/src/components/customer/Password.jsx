import React from "react";
import SideNav from "../layouts/sidebar/customersSidebar";
import Navbar from "../layouts/navbars/CustomerNavbar";
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

const Password = () => {
  return (
    <>
      <div className="main-panel ps">
        <SideNav />
        <Navbar />
        <div className="content">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <h5 class="title">Password</h5>
                </div>
                
                    
                    
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
                    
                    <div class="card-footer">
                        <button type="submit" class="btn btn-fill btn-primary">Change password</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
    </>
  );
};

export default Password;
