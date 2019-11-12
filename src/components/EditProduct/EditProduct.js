import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import EditProductForm from './EditProductForm';
import Product from '../Products/Product';

import * as actionTypes from '../../actions/actions';
import { connect } from 'react-redux';


class EditProduct extends Component {

    state = {
        category: null,
        imageUrl: null,
        price: null,
        title: null,
        id: null
    }

    componentDidMount() {

    }



    render() {

        return (
            <div className="App">
                {
                }
                <h3>Product Opeartions</h3>

                <section>
                    {
                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead className="bg-info ">
                                    <tr className="text-white">
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.postsFilter.map(post => {
                                            return (
                                                <tr key={post.id}>
                                                    <td>{post.id}</td>
                                                    <td>{post.title}</td>
                                                    <td>${post.price}</td>
                                                    <td><button className="btn btn-danger " onClick={() => this.props.deleteProduct(post.id)}>Delete</button></td>
                                                    <td ><button className="btn btn-success  " ><Link className="text-white" to={{ pathname: '/editproductform/' + post.id, state: { title: post.title, price: post.price, category: post.category, imageUrl: post.imageUrl } }}>Edit</Link></button></td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    }





                </section>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return ({

        postsFilter: state.postsFilter

    })
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(actionTypes.deleteProduct(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);