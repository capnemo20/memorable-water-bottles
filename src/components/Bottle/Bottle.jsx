import React from 'react';
import "./Bottle.css";

const Bottle = ({bottle}) => {
    return (
        
        <div className = "bottle-card">
            <img src={bottle.img} alt={bottle.name} />
            <h3>Name: {bottle.name}</h3>
        </div>
    );
};

export default Bottle;