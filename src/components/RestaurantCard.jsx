import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resData?.info || {};

  const { deliveryTime } = resData?.info?.sla || {};

  return (
    <div className="res-card border border-solid  w-[250px] rounded-lg bg-amber-200 hover:bg-amber-500 ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="foodItem1  object-cover rounded-lg  p-1"
      />

      <div className="resCard-detail text-lg p-1">
        <h3 className="res-name font-bold text-[22px]">{name}</h3>

        <p className="res-cuisine">{cuisines?.join(", ")}</p>

        <div className="res-meta">
          <span>⭐ {avgRating}</span>
          <span>  {deliveryTime} min</span>
        </div>

        <p className="res-cost">{costForTwo}</p>
        <p className="res-area">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
