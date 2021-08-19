import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class ProfileEdit extends Component {

    state = {
        current_password:'',
        new_password:'',
        re_password:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount(){

        const officer_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/edit-password/${officer_id}`);

        if(res.data.status === 200){
            
            //console.log(agent_id);
           
        }else{
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
              });
              
            this.props.history.push('/change-password');  
        }
    }

    updatePassword = async (e) =>{
        e.preventDefault();

        const officer_id = this.props.match.params.id;

        document.getElementById('updatebtn').disable = true;
        document.getElementById('updatebtn').innerText = 'Updating';

        const res = await axios.post(`http://localhost:8000/api/update-password/${officer_id}`, this.state);
        
        console.log(res);

        if(res.data.status === 200){

            document.getElementById('updatebtn').disable = false;
            document.getElementById('updatebtn').innerText = 'Save';

            this.props.history.push('/view-profile');

            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
        }else{
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
                });
                
            this.props.history.push('/view-profile');  
        }
    }

//======================================================================

    render(){

        return (
            <div>
            <div className="wrapper">
            <SideNav />
            <div className="main-panel ps" >
                <Navbar />
            <div className= "content">
                <div class="row" style={{ right: "500px" }}>
                <div class="col-md-12">
                    <div class="card ">
                    <div class="card-header">

                        <h4>Officer Change Password</h4>
                    </div>

                        <div className="card-body">

                            <form onSubmit={this.updatePassword}>
                                <div className="form-group mb-3">
                                    <lebel>Current Password</lebel>
                                    <input type="text" name="current_password" value={this.state.current_password} className="form-control" onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>New Password</lebel>
                                    <input type="text" name="new_password" value={this.state.new_password} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>Re Password</lebel>
                                    <input type="text" name="re_password" value={this.state.re_password} className="form-control"  onChange={this.handleInput}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    <button type="submit" id="updatebtn" className="btn btn-primary btn-sm float-end">Save</button>
                    <Link to={'/view-profile'} className="btn btn-primary btn-sm float-end">Back</Link>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
};
export default ProfileEdit;
