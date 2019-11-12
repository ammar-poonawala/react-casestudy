import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import Post from './Post/Post';
import vegetableDisplay from './VegetableDisplay/VegetableDisplay';
import * as actionTypes from '../actions/actions';
import { connect } from 'react-redux';




class Home extends Component {

    state = {
        searchText: ''
    }

    componentDidMount() {
        
        this.props.fetchProducts();

    }
    filterProduct = (category) => {
        this.props.Display(category);
    }

    addToCartHandler = (id) => {
        
        this.props.addToCart(id);


    }


    handleChange = (event) => {

        this.setState({
            searchText: event.target.value
        })



    }



    render() {





        return (

            <BrowserRouter>
                <div className="App">

                    <div className="input-group mb-3 ">

                        <input type="text" placeholder="Search.." className="form-control form-input" name="search" onChange={this.handleChange} />


                    </div>

                    <div className="home-nav">
                        <ul className="row">
                            <div className="col-md-4"><li><button className="m-3 btn btn-primary btn-cat" onClick={() => this.filterProduct('all')}>All</button></li>
                            </div>
                            <div className="col-md-4"><li><button className="m-3 btn btn-primary btn-cat" onClick={() => this.filterProduct('vegetables')}>Vegetable</button></li>
                            </div>
                            <div className="col-md-4"><li><button className="m-3 btn btn-primary btn-cat" onClick={() => this.filterProduct('fruits')}>Fruits</button></li>
                            </div>

                        </ul>
                    </div>

                    {

                        this.props.postsFilter.map(post => {
                            if (post.title.toLowerCase().includes(this.state.searchText.toLowerCase())) {
                                return (
                                    <Post key={post.id}
                                        imagePath={post.imageUrl}
                                        title={post.title}
                                        price={post.price}

                                        click={(id) => this.addToCartHandler(post.id)} />

                                );
                            }
                        })
                    }


                </div>
            </BrowserRouter>

        );



    };
};


const mapStateToProps = (state) => {
   
    console.log(state)
    return ({

        postsFilter: state.postsFilter,
        cart: state.cart,
        quantity: state.quantity

    })
}
const mapDispatchToProps = (dispatch) => {


    return {
        fetchProducts: () => dispatch(actionTypes.fetchProducts()),//action
        Display: (category) => dispatch(actionTypes.Display(category)),
        addToCart: (id) => dispatch(actionTypes.addToCart(id))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);