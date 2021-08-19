import React from 'react'
import logo from "../../black/img/flycash.png";
import Footer from "../layouts/footer";
import GuestNav from "../layouts/navbars/guestNav";
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { setUserSession } from './connect/getSession';

const Login  =() => {

    let history = useHistory();
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [error,setError] = useState(null);
    const [loging,setLoging] = useState(false);

    const handleLogin = () => {

        setError(null);
        setLoging(true);

        axios.post("http://localhost:8000/api/users-login", {
            email: email,
            password: password

        }).then(response => {
            setLoging(false);
             var data =response.data.user_status;
             console.log(data);
            
            //console.log('response-->>',response);

            if(data.type=="customer"){
             
                 setUserSession(data.email,data);
                history.push('/customer-dashboard');
            }
            // else if(response.data.agents.type=="#"){
            //     setUserSession(response.data.token, response.data.user);
            //     history.push('#');
            // }
            // else if(response.data.admins.type=="#"){
            //     setUserSession(response.data.token, response.data.user);
            //     history.push('#');
            // }
            else if(data.type=="officer"){
                setUserSession(data.email,data);
                history.push('/officer-dashboard');
            }       
        }).catch(error => {
            setLoging(false);
            //console.error('error-->>>',error);
            setError("Please input email & password");
        });
    }

    return (
        <div>
            <GuestNav/>
            <div className="wrapper wrapper-full-page">
                <div className="full-page login-page ">
                    <div className="content">
                        <div className=" container">

                        <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                                <form className="form" method="post" >
                                    

                                    <div className="card card-login card-white">
                                        <div className="card-header">
                                        <img src={logo} alt=""></img>
                                            <h1 align="center" className="card-title">Log in</h1>
                                        </div>

                                        {error && <div className="text-danger">{error}</div>}
                                        {/* <span className="text-danger"> {error.email}</span> */}
                                        
                                        <div className="card-body">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="tim-icons icon-email-85"></i>
                                                    </div>
                                                </div>
                                                <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                            
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="tim-icons icon-lock-circle"></i>
                                                    </div>
                                                </div>
                                                <input type="password" placeholder="Password" name="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
                                            
                                            </div>
                                        </div>
                                        <div className="card-footer">

                                            <input type="button" value={loging ? "Loging..." : "Login"} disabled={loging} className="btn btn-primary btn-lg btn-block mb-3" onClick={handleLogin}/>
                                            <div className="pull-left">
                                                <h6>
                                                    <Link href="" className="link footer-link">Create Account</Link>
                                                </h6>
                                            </div>
                                            <div className="pull-right">
                                                <h6>
                                                    <Link href="3" className="link footer-link">Forgot password?</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;