import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import "../../../App.css";
import SideNav from "../../layouts/sidebar/OfficerSidebar";
import Navbar from "../../layouts/navbars/OfficerNavbar";
import axios from 'axios';
import swal from 'sweetalert';
import { getUser } from "../../auth/connect/getSession";

const AgentDeatils = () => {

    const user = getUser();

    const history = useHistory();
    const [event, setAgents] = useState([]);
    const [search, setSearch] = useState("");
    const [block, setAgentsBlock] = useState([]);

    const mount= async()=>{

        const res = await axios.get('http://localhost:8000/api/show-agent');

        console.log(res.data);

        //var data = res.data.agents;
        
        if (res.data.status === 200) {
            setAgents(res.data.agents)
            
        }   
    }


    // const agentsBlock= async()=>{

    //     const res = await axios.get(`http://localhost:8000/api/agent-blockuser`);

    //     console.log(res.data);

    //     //var data = res.data.agents;
        
    //     if (res.data.status === 200) {
    //         setAgentsBlock(res.data.updates)

    //         swal({
    //             title: "Updated!",
    //             text: res.data.message,
    //             icon: "success",
    //             button: "OK!",
    //           });
    //     }
    // }


     useEffect(() => {
        mount();
        //agentsBlock();
        
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
                            <h4>Agents View Page</h4>

                            <input type="text"
                                placeholder="searching"
                                onChange={e => {setSearch(e.target.value)}}
                            />
                        </div>

                        <div class="card-body">
                       
                            <div class="table-responsive-lg">
                                <h2>Agents Data</h2>

                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>NID</th>
                                        <th>DOB</th>
                                        <th>Balance</th>
                                        <th>TS</th>
                                        <th>Type</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
        
                                <tbody>
                                    {
                                        event.filter((val) => {
                                            if (search == "") {
                                                return val
                                            }
                                            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }

                                            }).map((e) => {
                                            
                                            if(e.transaction_status==='unblocked'){
                                                var check='Blocked';
                                            }else if(e.transaction_status==='blocked'){
                                                var check='Unblocked';
                                            }

                                            return (
                                                <tr key={e.id} >
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.phone}</td>
                                                    <td>{e.nid}</td>
                                                    <td>{e.dob}</td>
                                                    <td>{e.balance}</td>
                                                    <td>{e.transaction_status}</td>
                                                    <td>{e.type}</td>

                                                    <td>
                                                        <Link to={`details-agent/${e.id}`} className="btn btn-success btn-sm">View</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`edit-agent/${e.id}`} className="btn btn-success btn-sm">Edit</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`${e.id}`} className="btn btn-success btn-sm"> {check}</Link>
                                                        {/* {check} */}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
                    <Link to={'/officer-dashboard'} className="btn btn-primary btn-sm float-end">Back</Link>
                    <Link to={'/transaction-agent'} className="btn btn-primary btn-sm float-end">All Transaction</Link>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default AgentDeatils;