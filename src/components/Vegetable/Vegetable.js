import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import Post from '../Post/Post';
import VegetableDisplay from '../VegetableDisplay/VegetableDisplay';

class Vegetable extends Component {

    state = {
        posts: [],
        //vegetablePosts: []

    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log("after axios");
                console.log(response);
                const posts = response.data.map(post => {
                    if (post.category == "vegetables") {


                        return {

                            ...post



                        }


                    }




                });
                // if(posts.category == "vegetables"){
                //     this.setState({posts:posts});
                //     console.log("in if of veg")
                //     console.log(posts)
                // }

                // const updatedPosts=posts.map(post=>{
                //     return {...post}
                // });

                console.log("before setstatet in vegetable component")
                this.setState({ posts: posts });
                console.log("after setstatet in vegetable component")
                console.log(posts)
                // if(typeof(posts) != 'undefined'){
                //     this.setState({ posts: posts });
                // }
                // console.log(posts)

                // const vegs = posts.map(veg=>{
                //     if(typeof(veg) !== 'undefined'  ){
                //         return{ ...veg}

                //     }
                // });
                // console.log("in undefined logic")
                // console.log(vegs)

                // this.setState({vegetablePosts : vegs})
                // console.log(vegetablePosts)





                //console.log()
                // if(posts.category=='vegetables'){
                //     this.setState({posts:posts})
                //     console.log("after category if")
                //     console.log(posts)
                // }
            }

            );



    }


    render() {
        console.log("in rener start")

        //working 88-94
        // if(this.state.posts[0] == undefined )
        // {
        //     console.log("post[0] is undefined")
        // }
        // else{
        //     console.log("post[0] is Defined!!")
        // }


        // if(this.state.posts.category == "vegetables"){
        //     this.state.posts.map(post =>{
        //         return (
        //          <Post key={post.id}
        //                   imagePath={post.imageUrl}
        //                  title={post.title}
        //                  price={post.price} />
        //                  //clicked={()=>}
        //         );
        //     }) 
        // }

        return (
            <div>
                <h1>Vegetable component</h1>

                {/* if(this.state.posts.category == "vegetables"){
                    this.state.posts.map(post =>{
                        return (
                         <Post key={post.id}
                                  imagePath={post.imageUrl}
                                 title={post.title}
                                 price={post.price} />
                                 //clicked={()=>}
                        );
                    }) 
                }  */}
                {
                    this.state.posts.map(post => {
                        if (post != undefined)
                            return (
                                <VegetableDisplay key={post.id}
                                    imagePath={post.imageUrl}
                                    title={post.title}
                                    price={post.price} />
                            );
                    })


                }


            </div>
        )
    }
}


export default Vegetable;