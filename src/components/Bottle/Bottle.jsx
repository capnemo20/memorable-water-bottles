import React from 'react';
import "./Bottle.css";


const Bottle = ({bottle, handleAddToCart}) => {
    return (
        
        <div className = "bottle-card">
            <img src={bottle.img} alt={bottle.name} />
            <h3>Name: {bottle.name}</h3>
            <p>Price:${bottle.price}</p>
            <p>{bottle.stock} remaining</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;