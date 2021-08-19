import React, { Component } from 'react'
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

class CustomerEdit extends Component {

    state = {
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

        const customer_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/edit-customer/${customer_id}`, this.state);

        if(res.data.status === 200){

            //console.log(customer_id);
            this.setState({
                phone: res.data.customers.phone,
                nid: res.data.customers.nid,
                dob: res.data.customers.dob,
                type: res.data.customers.type,
            });
        }else{
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
              });
              
            this.props.history.push('/show-customer');  
        }
    }

    updateCustomer = async (e) =>{
        e.preventDefault();

        const customer_id = this.props.match.params.id;

        document.getElementById('updatebtn').disable = true;
        document.getElementById('updatebtn').innerText = 'Updating';

        const res = await axios.put(`http://localhost:8000/api/update-customer/${customer_id}`, this.state);
        
        if(res.data.status === 200){

            document.getElementById('updatebtn').disable = false;
            document.getElementById('updatebtn').innerText = 'Update';

            this.props.history.push('/show-customer');

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

                        <h4>Customer Edit Page</h4>
                    </div>

                        <div className="card-body">

                            <form onSubmit={this.updateCustomer}>

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
                    <button type="submit" id="updatebtn"className="btn btn-primary btn-sm float-end">Update</button>
                    <Link to={'/show-customer'} className="btn btn-primary btn-sm float-end">Back</Link>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
};
export default CustomerEdit;
