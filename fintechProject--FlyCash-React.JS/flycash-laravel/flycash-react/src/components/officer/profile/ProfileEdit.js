import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class ProfileEdit extends Component {

    state = {
        name:'',
        email:'',
        phone:'',
        nid:'',
        dob:'',
        type:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount(){

        const officer_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/edit-profile/${officer_id}`);

        if(res.data.status === 200){

            //console.log(officer_id);
            this.setState({
                name: res.data.profiles.name,
                email: res.data.profiles.email,
                phone: res.data.profiles.phone,
                nid: res.data.profiles.nid,
                dob: res.data.profiles.dob,
                type: res.data.profiles.type,
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

    updateOfficer = async (e) =>{
        e.preventDefault();

        const officer_id = this.props.match.params.id;

        document.getElementById('updatebtn').disable = true;
        document.getElementById('updatebtn').innerText = 'Updating';

        const res = await axios.put(`http://localhost:8000/api/update-profile/${officer_id}`, this.state);
        
        if(res.data.status === 200){

            document.getElementById('updatebtn').disable = false;
            document.getElementById('updatebtn').innerText = 'save';

            this.props.history.push('/view-profile');

            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
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

                        <h4>Officer Edit Page</h4>
                    </div>

                        <div className="card-body">

                            <form onSubmit={this.updateOfficer}>

                                <div className="form-group mb-3">
                                    <lebel>Name</lebel>
                                    <input type="text" name="name" value={this.state.name} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>Email</lebel>
                                    <input type="text" name="email" value={this.state.email} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>Phone</lebel>
                                    <input type="text" name="phone" value={this.state.phone} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>NID</lebel>
                                    <input type="text" name="nid" value={this.state.nid} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>DOB</lebel>
                                    <input type="text" name="dob" value={this.state.dob} className="form-control"  onChange={this.handleInput}/>
                                </div>
                                <div className="form-group mb-3">
                                    <lebel>Type</lebel>
                                    <input type="text" name="type" value={this.state.type} className="form-control"  onChange={this.handleInput}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    <button type="submit" id="updatebtn" className="btn btn-primary btn-sm float-end">Update</button>
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
