import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component{

    state = {
        product_name:'',
        qty:'',
        price:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkLogin = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-product', this.state);

        if(res.data.status === 200){
            //console.log(res.data.message);
            this.setState({
                product_name:'',
                qty:'',
                price:'',
            });
        }
    }

    render(){
        return(
            <div ClassName="main-container">
                <div ClassName="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Employee Dashboard
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.checkLogin}>

                                    <div className="form-group mb-3">
                                        <lebel>Product Name</lebel>
                                        <input type="text" name="product_name" value={this.state.product_name} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Quantity</lebel>
                                        <input type="text" name="qty" value={this.state.qty} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Price</lebel>
                                        <input type="text" name="price" value={this.state.price} className="form-control"  onChange={this.handleInput}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Add Product</button>
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

export default Login;