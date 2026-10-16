import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);
//   console.log("Bottles:", bottles);

const handleAddToCart = (bottle)=>{
    console.log("Add to cart clicked", bottle);
}

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <div className="bottles-container">
       
        {bottles.map((bottle) => (
          <Bottle
           key={bottle.id} 
           bottle={bottle} 
           handleAddToCart={handleAddToCart}
           ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
