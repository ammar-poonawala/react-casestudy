import React, { Component } from 'react';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import * as actionTypes from '../../actions/actions';
import './AddProduct.css';



class AddProduct extends Component {
    state = {
        title: null,
        price: null,
        category: 'fruits',
        imageUrl: null,

        errorMsg: {
            title: '',
            price: '',
            category: '',
            imageUrl: ''

        }
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


        if (valid) {
           
            let newProduct = {
                title: this.state.title,
                category: this.state.category,
                price: this.state.price,
                imageUrl: this.state.imageUrl
            }
            Axios.post("http://localhost:3000/api/products", newProduct)
                .then(response => {
                    
                    alert("added successfully");
                    this.props.history.push('/')
                }).catch(error => { console.log(error) })
        }
        else {
            alert('Can not Submit the form');
        }
        event.preventDefault();

    };
    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;



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


    render() {

        return (
            <div>
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit} >
                    <div> <input required className="form-input" placeholder="Product title" type="text" name="title" onChange={this.handleChange} />
                    </div>
                    <div><span>{this.state.errorMsg.title}</span></div>
                    <div><input required className="form-input" placeholder="Product price" type="number" step="0.01" min="1" name="price" onChange={this.handleChange} /></div>
                    <div><span>{this.state.errorMsg.price}</span></div>


                    <div><input required className="form-input" placeholder="Product details" type="text" name="imageUrl" onChange={this.handleChange} /></div>
                    <div><span>{this.state.errorMsg.imageUrl}</span></div>
                    <div><select name="category" className="form-input " onChange={this.handleChange} >
                        <option value="fruits">fruits</option>
                        <option value="vegetables">vegetables</option>
                    </select></div>
                    <div>  <button className="btn btn-success mt-2" >Submit</button></div>
                </form>
            </div>
        );
    }
}

export default AddProduct