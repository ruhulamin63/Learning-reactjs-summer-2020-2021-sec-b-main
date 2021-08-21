import axios from "axios";
import React, { useState,useCallback,useEffect} from "react";
import  Dropzone   from "react-dropzone";
import { useHistory } from "react-router-dom";
import {useDropzone} from 'react-dropzone';
//import Image from "./Image"
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { getUser, setUserSession } from "../auth/connect/getSession";
import Navbar from "../layouts/navbars/CustomerNavbar";
import SideNav from "../layouts/sidebar/customersSidebar";
import Notification from "../layouts/notification/Notification";
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const Profile = () => {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    //console.log(file.path);
  }, [])
const [files, setFiles] = useState([]);
useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png',
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));


   











  const user = getUser();
 
  const history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [profile, setProfile] = useState({
    phone: "",
    name: "",
  });
  
  const [msg, setMsg] = useState(" ");
  const [error, setError] = useState(" ");
  //const [error, seterror] = useState(" ");
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile({ ...profile, [name]: [value] });
    console.log(name, value);
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    const phone = profile.phone.toString();
    const name = profile.name.toString();
    const email = user.email.toString();
    const res = await axios.post("http://localhost:8000/api/customer/profile", {
      name: name,
      phone: phone,
      email: email,
    });
    // { profile_type: profile_type,phone: phone,amount:amount,password:password,email:email}
    if (res.data.status === 200) {
      setNotify({
        isOpen: true,
        messages: res.data.message,
        type: "success",
      });

      setMsg(res.data.message);

      console.log(res.data.data);
      setProfile({ phone: "", name: "" });

      setUserSession(res.data.user_status.email, res.data.user_status);

      //setTimeout(() => { history.push('/customer-profile'); }, 3000);
    } else if (res.data.status === 240) {
      setMsg(res.data.message);
      //console.log(res.data.data);
      setProfile({
        phone: "",
        name: "",
      });
      setNotify({
        isOpen: true,
        messages: res.data.message,
        type: "error",
      });
      //setUserSession(email,res.data.user_status);
    } else {
      setError(res.data.error);
      console.log(error);
    }
    e.stopPropagation();
  };
  return (
    <>
      <div className="main-panel ps">
        <SideNav />
        <Navbar />

        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <form onSubmit={updateProfile}>
                  <CardHeader>
                    <h5 className="title">Edit Profile</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Email address</label>
                          <Input
                            defaultValue={user.email}
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            defaultValue={user.dob}
                            placeholder={user.dob}
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Nid</label>
                          <Input
                            defaultValue={user.nid}
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            name="name"
                            defaultValue={user.name}
                            placeholder="Name"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.name}</span>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            defaultValue={user.phone}
                            placeholder="Phone NUmber"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.phone}</span>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Account Type</label>
                          <Input
                            defaultValue={user.type}
                            disabled
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <button
                      className="btn btn-fill btn-primary"
                      color="primary"
                      type="submit"
                    >
                      Save
                    </button>
                  </CardFooter>
                </form>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author form-group">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={files.preview}
                      />
                      <h5 className="title">{user.name}</h5>
                    </a>
                    <p className="description"> {user.type} Account </p>
                  </div>
                  {Image.acceptedFileItems}
                  <div>
    <section className="dp btn btn-primary btn-simple">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      
      
    </section>
  <aside  style={thumbsContainer}>
  {acceptedFileItems}
  </aside>
  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default Profile;
