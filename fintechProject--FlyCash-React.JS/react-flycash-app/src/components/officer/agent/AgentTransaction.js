import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

//import swal from 'sweetalert';

class AgentTransaction extends Component{

    state = {
        agents: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/transaction-agent');

       // console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                agents: res.data.agents,
                loding: false,    
            });
        }
    }

//======================================================================


    render(){

        var agent_transaction_table = "";

        if(this.state.loding){
            agent_transaction_table = <tr><td colSpan="8"><h2>loding...</h2></td></tr>
        }else{
            agent_transaction_table = 
                this.state.agents.map( (item)=> {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.transaction_type}</td>
                            <td>{item.amount}</td>
                            <td>{item.balance}</td>
                            <td>{item.date}</td>

                            <td>
                                <Link to={`show-agent/${item.id}`} className="btn btn-success btn-sm">download pdf</Link>
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
                                <h4>Agent All Transaction Page
                                    <Link to={'/show-agent'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <h2>Transaction Data</h2>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Transaction Type</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                            <th>Date</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {agent_transaction_table}
                                    </tbody>
                                </table>

                                <Link to={'/show-agent'} className="btn btn-primary btn-sm float-end">Back</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentTransaction;