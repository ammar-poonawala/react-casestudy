import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as actionTypes from '../../actions/actions';
import Axios from 'axios';
import './EditProductForm.css';

class EditProductForm extends Component {
    state = {

        category: '',
        imageUrl: '',
        price: '',
        title: '',

        errorMsg: {
            title: '',
            price: '',
            category: '',
            imageUrl: ''

        }


    }


    componentDidMount() {


        this.setState({
            category: this.props.location.state.category,
            title: this.props.location.state.title,
            price: this.props.location.state.price,
            imageUrl: this.props.location.state.imageUrl
        })

       
        let id = this.props.match.params.id
        



    }
    handleChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        let errorMsg = this.state.errorMsg;

        switch (name) {
            case 'title':
                if (errorMsg.title = value.trim().length < 1 ? "Title cannot be empty" : "");
                else if (errorMsg.title = value.length < 3 ? "Title must be atleast 3 characters long" : "");
                else (errorMsg.title = value.match(/^([^0-9]*)$/) ? "" : "Title must not contain numbers")

                break;

            case 'price':
                if (errorMsg.price = value.trim().length < 1 ? "Price cannot be empty" : "");
                else (errorMsg.price = value <= 0 ? "Price cannot be less than 0" : "")
                break;

            case 'category':
                if (errorMsg.category = value.length < 1 ? "Catergory cannot be empty" : "");
                break;

            case 'imageUrl':
                if (errorMsg.imageUrl = value.trim().length < 1 ? "URL cannot be empty" : "");
                else (errorMsg.imageUrl = value.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) ? "" : "Enter valid Url")
                break;


            default:
                break;
        }

       
        this.setState({ [name]: value });


    }

    handleSubmit = (event) => {

        let valid = true;

        if (this.state.errorMsg.title.length > 0) {
            valid = false;

        }
        if (this.state.errorMsg.price.length > 0) {
            valid = false;

        }
        if (this.state.errorMsg.category.length > 0) {
            valid = false;

        }
        if (this.state.errorMsg.imageUrl.length > 0) {
            valid = false;

        }


        if (valid == true) {


            const data = {
                category: this.state.category,
                imageUrl: this.state.imageUrl,
                price: this.state.price,
                title: this.state.title

            }

            event.preventDefault();
            
            Axios.put("http://localhost:3000/api/products/" + this.props.match.params.id, data)
                .then(response => {
                    

                    alert("updated successfully");
                    this.props.history.push('/')

                });
        }
        else {
            alert('Can not Submit the form');
        }

    };


    render() {





        return (

            <div>
                <h3>Edit Product</h3>
                <form onSubmit={this.handleSubmit} >
                    <div> <input className="form-input" value={this.state.title} placeholder="Product title" type="text" name="title" onChange={this.handleChange} /></div>
                    <div><span>{this.state.errorMsg.title}</span></div>
                    <div><input className="form-input" value={this.state.price} placeholder="Product price in $" type="number" min="1" step="0.01" name="price" onChange={this.handleChange} /></div>
                    <div><span>{this.state.errorMsg.price}</span></div>

                    <div><input className="form-input" value={this.state.imageUrl} placeholder="Product details" type="text" name="imageUrl" onChange={this.handleChange} /></div>
                    <div><span>{this.state.errorMsg.imageUrl}</span></div>
                    <div><select name="category" className="form-input " onChange={this.handleChange} value={this.state.category}>

                        <option value="fruits">fruits</option>
                        <option value="vegetables">vegetables</option>
                    </select></div>
                    <div>  <button className="btn btn-success mt-2" >Submit</button></div>
                </form>
            </div>
        );
    }
}




export default EditProductForm;