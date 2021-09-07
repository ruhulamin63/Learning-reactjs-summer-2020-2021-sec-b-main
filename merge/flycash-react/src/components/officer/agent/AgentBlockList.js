import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import axios from 'axios';
import swal from 'sweetalert';
import { getUser } from "../../auth/connect/getSession";

const AgentBlockList = () => {

    const user = getUser();

    const history = useHistory();
    const [event, setAgents] = useState([]);

    const mount= async()=>{

        const res = await axios.get('http://localhost:8000/api/show-agent');

        console.log(res.data);

        //var data = res.data.agents;
        
        if (res.data.status === 200) {
            setAgents(res.data.agents)
            
        }   
    }

     useEffect(() => {
        mount();
        
     }, []);

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
                            <h4>Agents Block List</h4>
                        </div>
                        <Link to={'/show-agent'} className="btn btn-primary btn-sm float-end">Back</Link>
                        <div class="card-body">
                       
                            <div class="table-responsive-lg">
                                <h2>Block Users Data</h2>

                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Transaction Status</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
        
                                <tbody>
                                    {
                                        event.map((e) => {

                                            if(e.transaction_status==='blocked'){
                                                return (
                                                    <tr key={e.id} >
                                                        <td>{e.name}</td>
                                                        <td>{e.email}</td>
                                                        <td>{e.phone}</td>
                                                        <td>{e.transaction_status}</td>
                                                        <td>{e.type}</td>
                                                    </tr>
                                                );
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
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
export default AgentBlockList;