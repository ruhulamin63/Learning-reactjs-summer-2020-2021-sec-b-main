import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import swal from 'sweetalert';


class Register extends Component{

    state = {
        username:'',
        name:'',
        phone:'',
        password:'',
        //error_list: [],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveRegister = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/emp-register', this.state);

        if(res.data.status === 200){
            //console.log(res.data.message);

            swal({
                title: "Inserted!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });

            this.setState({
                username:'',
                name:'',
                phone:'',
                password:'',
            });

            this.props.history.push('/admin');

        }
        // else{
        //     this.setState({
        //         error_list: res.data.validate_error,
        //     });
        // }
    }

    render(){
        return(
            <div ClassName="main-container">
                <div ClassName="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Employee Register Page
                                    <Link to={'/admin'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.saveRegister}>

                                    <div className="form-group mb-3">
                                        <lebel>Username</lebel>
                                        <input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleInput}/>
                                        {/* <span className="text-danger">{this.state.error_list.username}</span> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Name</lebel>
                                        <input type="text" name="name" value={this.state.name} className="form-control"  onChange={this.handleInput}/>
                                        {/* <span className="text-danger">{this.state.error_list.name}</span> */}
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <lebel>Phone</lebel>
                                        <input type="text" name="phone" value={this.state.phone} className="form-control"  onChange={this.handleInput}/>
                                        {/* <span className="text-danger">{this.state.error_list.phone}</span> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Password</lebel>
                                        <input type="text" name="password" value={this.state.password} className="form-control"  onChange={this.handleInput}/>
                                        {/* <span className="text-danger">{this.state.error_list.password}</span> */}
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;