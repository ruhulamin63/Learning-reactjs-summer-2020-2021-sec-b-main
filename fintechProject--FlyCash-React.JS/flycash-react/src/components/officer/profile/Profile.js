import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class ProfileEdit extends Component {

    state = {
        profiles: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/view-profile');

        console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                profiles: res.data.profiles,
                loding: false,    
            });
        }
    }

//======================================================================

    render(){

        var officer_table = "";

        if(this.state.loding){
            officer_table = <tr><td colSpan="9"><h2>loding...</h2></td></tr>
        }else{
            officer_table = 
            this.state.profiles.map( (item)=> {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.nid}</td>
                        <td>{item.dob}</td>
                        <td>{item.type}</td>

                        <td>
                            <Link to={`view-officer/${item.id}`} className="btn btn-success btn-sm">View</Link>
                        </td>
                        <td>
                            <Link to={`edit-profile/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <Link to={`change-password/${item.id}`} className="btn btn-danger btn-sm">Change Password</Link>
                        </td>
                    </tr>
                );
            });
        }

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

                    <h2>Officer Data</h2>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>NID</th>
                                            <th>DOB</th>
                                            <th>Type</th>
                                            <th>View</th>
                                            <th>Edit</th>
                                            <th>Change Password</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {officer_table}
                                    </tbody>
                                </table>
                            <Link to={'/officer-dashboard'} className="btn btn-primary btn-sm float-end">Back</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
};
export default ProfileEdit;
