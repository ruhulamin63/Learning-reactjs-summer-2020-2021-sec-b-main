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

        const agent_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/agent-blockeduser/${agent_id}`);

        console.log(res);

        if(res.data.status === 200 ){
            
            //console.log(agent_id);
            // this.setState({
            //     phone: res.data.agents.phone,
            //     nid: res.data.agents.nid,
            //     dob: res.data.agents.dob,
            //     type: res.data.agents.type,
            // });
            if(res.data.agents.transaction_status=='blocked'){
                
            }

        }else{
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
              });
              
            this.props.history.push('/show-agent');  
        }
    }

//======================================================================


    render(){

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Agent View Page
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentDetails;