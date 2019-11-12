import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import './Product.css';


class Product extends Component {

state= {
  posts:[]
}

componentDidMount(){
  Axios.get('http://localhost:3000/api/products')
  .then(response =>{
    console.log(response);
    const posts = response.data.map (post =>{
      return{
        ...post
      }
    });
    this.setState({posts:posts})
    console.log(posts)
  })
  .catch(error => {
    console.log("error in products component")
});
}
 

  render() {
    return (
      <div className="App">
        <h1>Product Component</h1>
        <input className="input-button" type="button" value="Add Product" />
          <section>
          {
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.posts.map(post=>{
                    return (
                      <tr key ={post.id}>
                        <td>{post.title}</td>
                        <td>${post.price}</td>
                        <td>Button</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          }

          </section>
          {/* {
            this.state.posts.map(post=>{
              return (
                  <p>{post.title}</p>
              );
            })
          } */}
      </div>
    );
  }
}

export default Product;
