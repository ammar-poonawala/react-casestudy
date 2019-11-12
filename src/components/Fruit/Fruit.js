import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import FruitDisplay from '../FruitDisplay/FruitDisplay';


class Fruit extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log("after axios of fruit");
                console.log(response)
                const posts = response.data.map(post => {
                    if (post.category == "fruits") {
                        return {
                            ...post
                        }
                    }
                });
                console.log("before setstate in fruit component")
                this.setState({ posts: posts });
            });
    }


    render() {
        return (
            <div>
                <h2>Fruit component</h2>
                {
                    this.state.posts.map(post => {
                        if (post != undefined)
                            return (
                                <FruitDisplay key={post.id}
                                    imagePath={post.imageUrl}
                                    title={post.title}
                                    price={post.price} />
                            )


                    })
                }
            </div>
        )
    }

}
export default Fruit;