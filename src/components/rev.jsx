 import RestaurantCard from "./RestaurantCard";
 import originalList  from "../utils/mockData";


const Body=()=>{
  let reslist = [...originalList];
return(
<div className="body">
  <div className="search">search</div>
   <div>
        <button className="res-btn" onClick={()=>{
          reslist=reslist.filter((re)=>re.info.avgRating>4.5)
         console.log(reslist) 
        }}> TOp rated Rest</button>
       
    </div>

  <div className="res-container">
     {/* <RestaurantCard  resData={reslist[0]} /> 
     <RestaurantCard  resData={reslist[1]}/> */}

     {
      
      reslist.map((restaurants)=>{
      
       return <RestaurantCard key={restaurants.info.id} resData={restaurants}></RestaurantCard>

      })
     }
     
    
     
  </div>
</div>
  );
}

export default Body;