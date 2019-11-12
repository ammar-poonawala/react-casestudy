import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import EditProductForm from './components/EditProduct/EditProductForm';
import Cart from './components/Cart/Cart';
import { connect } from 'react-redux';

class App extends Component {




  render() {
    return (

      <BrowserRouter>
        <div className="App">


          <ul className="app-nav bg-dark text-white">
            <li className="app-nav-li"><Link to={'/'} className="text-white">Home</Link></li>
            <li className="app-nav-li"><Link to={'/addproducts'} className="text-white">Add Products</Link></li>
            <li className="app-nav-li"><Link to={'/editproducts'} className="text-white">Edit Products</Link></li>
            <li className="app-nav-li float-right text-white"><Link to={'/cart'}><i className="fas fa-shopping-cart text-white"></i></Link> {this.props.cart.length}</li>
            <h4 className="w-50 margin-left pt-2">Ecommerce Store</h4>

          </ul>

          <hr className="mt-0 mb-0" />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/addproducts' component={AddProduct} />
            <Route exact path='/editproducts' component={EditProduct} />
            <Route exact path='/editproductform/:id' component={EditProductForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return ({

    postsFilter: state.postsFilter,
    cart: state.cart

  })
}

export default connect(mapStateToProps, null)(App);
