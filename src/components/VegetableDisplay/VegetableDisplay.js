import React from 'react';
import './VegetableDisplay.css';

const vegetableDisplay = (props) => {
    console.log("in vegetabledisplay function component")
    console.log(props)
    //if(this.props.id !==undefined){
    return (
        <div className="card">
            {/* <img src={props.imagePath} alt="Avatar" style="width:15%"></img> */}
            <img src={props.imagePath} alt="items" width="80%" height="50%" />
            <div className="container">

                <h4><b>{props.title}</b></h4>
                <p>${props.price}</p>
                <button > Add</button>
            </div>

        </div>
    );
    //}
}

export default vegetableDisplay;