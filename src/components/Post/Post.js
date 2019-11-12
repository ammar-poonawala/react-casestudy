import React, { Component } from 'react';
//import './Post.css';
class Post extends Component {
    render() {




        return (
            <div className="card m-2">

                <img src={this.props.imagePath} alt="items" width="80%" height="50%" />
                <div className="container">

                    <h4><b>{this.props.title}</b></h4>
                    <p>${this.props.price}</p>
                    <button className="btn btn-success" onClick={this.props.click}  > Add</button>
                </div>

            </div>
        );
    }
}

export default Post