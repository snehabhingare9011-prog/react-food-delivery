import { useState } from "react";
import pizzHut from "../utils/metaData";
import PizzMenuDish from "./PizzMenuDish";
import "./Pizza.css";

const Pizza = () => {
  const pizzHutMenu = [...pizzHut];
  const [filterType, setFilterType] = useState("ALL");

  const {
    name,
    costForTwoMessage,
    itemCards = [],
    avgRating,
    totalRatingsString
  } = pizzHutMenu[0]?.card || {};

   
//  console.log( "sneha bhingare" ,itemCards);
 const filteredItems = itemCards.filter((dish) =>{
  const isVeg = Boolean(dish?.card?.info?.isVeg);
  console.log(isVeg);

  if (filterType === "VEG") return isVeg;
  if (filterType === "NONVEG") return !isVeg;
  return true;
});
console.log(filteredItems);


  return (
    <div className="Pizz-card-Menu">
      {/* RESTAURANT INFO */}
      <div className="restro-info">
        <h1>{name}</h1>
        <h2>
          {avgRating} ({totalRatingsString}) · {costForTwoMessage}
        </h2>
      </div>

      {/* MENU TITLE */}
      <h1 className="menu-title">Menu</h1>

      {/* VEG / NON-VEG FILTER BUTTONS */}
      <div className="food-filter">
        <button onClick={() => setFilterType("VEG")}>
          <span className="green-dot"></span> Veg
        </button>

        <button onClick={() => setFilterType("NONVEG")}>
          <span className="red-dot"></span> Non-Veg
        </button>

        <button onClick={() => setFilterType("ALL")}>
          All
        </button>
      </div>

      {/* MENU CARDS */}
      <div className="menu-info">
        {filteredItems.map((dish) => (
          <PizzMenuDish
            key={dish.card.info.id}
            dishData={dish}
          />
        ))}
      </div>
    </div>
  );
};

export default Pizza;
