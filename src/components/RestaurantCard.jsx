
import {CDN_URL} from '../utils/constants';
const RestaurantCard=(props)=>{

  const{resData}=props;
  const {name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
areaName
}=resData?.info||{};
  const{deliveryTime}=resData?.info?.sla||{};

  

  return(
    <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}> 
    <div >
      <img src={CDN_URL+cloudinaryImageId} alt="img-logo" className="foodItem1"/>
      
    </div>
    <div className="resCard-detail">
        <h3>{name}</h3>
     <h4>{cuisines.join(",")}</h4>
     <h4>{avgRating} stars</h4>
     <h4>{costForTwo}</h4>
     <h4>{deliveryTime} MINS</h4>
     <h4>{areaName}</h4>
    </div>
   
     

    </div>
  )

}

export default RestaurantCard;