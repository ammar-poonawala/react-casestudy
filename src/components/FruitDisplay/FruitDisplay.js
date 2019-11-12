import React from 'react';
import './FruitDisplay.css';

const fruitDisplay = (props) => {
    console.log("in fruitdisplay component");
    return (
        <div className="card">

            <img src={props.imagePath} alt="items" width="80%" height="50%" />
            <div className="container">

                <h4><b>{props.title}</b></h4>
                <p>${props.price}</p>
                <button > Add</button>
            </div>
        </div>

    );
}

export default fruitDisplay;