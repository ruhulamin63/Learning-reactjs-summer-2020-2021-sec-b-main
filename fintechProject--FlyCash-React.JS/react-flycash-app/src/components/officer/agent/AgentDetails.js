import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

//import swal from 'sweetalert';

class AgentDetails extends Component{

    state = {
        agents: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/show-agent');

        console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                agents: res.data.agents,
                loding: false,    
            });
        }
    }

//======================================================================


    render(){

        var agent_table = "";

        if(this.state.loding){
            agent_table = <tr><td colSpan="11"><h2>loding...</h2></td></tr>
        }else{
            agent_table = 
                this.state.agents.map( (item)=> {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.nid}</td>
                            <td>{item.dob}</td>
                            <td>{item.balance}</td>
                            <td>{item.transaction_status}</td>
                            <td>{item.type}</td>

                            <td>
                                <Link to={`details-agent/${item.id}`} className="btn btn-success btn-sm">View</Link>
                            </td>
                            <td>
                                <Link to={`edit-agent/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                        </tr>
                    );
                });
        }

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Agent View Page
                                    <Link to={'/transaction-agent'} className="btn btn-primary btn-sm float-end">All Transaction</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <h2>Agent Data</h2>
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
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {agent_table}
                                    </tbody>
                                </table>

                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentDetails;