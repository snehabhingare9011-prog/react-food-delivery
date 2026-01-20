import React from 'react'
import { DISH_URL } from '../utils/constants';


const PizzMenuDish = ({dishData}) => {
  console.log("snea :",dishData);

    const {name,isVeg,description,imageId}=dishData?.card?.info||{};
    console.log(isVeg);
    const desc=description.split(" ").slice(0,10).join(" ")+"...";
    console.log(desc)
  return (
    <div className="pizza-card">
       <h1 className="dish-name"><span className={isVeg ? "green-dot" : "red-dot"}></span>{name}</h1>
        <h3>{desc}</h3>
        <img src={DISH_URL+imageId} alt="dishImg">{console.log(DISH_URL)}</img>

    </div>
    
  
     
 
   
  )
}

export default PizzMenuDish