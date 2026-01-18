 import RestaurantCard from "./RestaurantCard";
 import { useEffect, useState } from "react";
 import Shimmer from "./Shimmer";


const Body=()=>{
  const[allreslist,setallreslist]=useState([]);
  const[reslist,setreslist]=useState([]);
  const[inputText,setinputText]=useState("");

  const fetchdata=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.64886431867022&lng=73.76002306438205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      console.log(data.status)
    const json= await data.json();
        // console.log(json)
        // console.log(json?.data);
    setallreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
   useEffect(()=>{
     fetchdata();
  },[]);



  if(reslist.length==0){
    return<Shimmer/>

  }
 
return reslist.length==0?(<Shimmer/>):(
<div className="body">
  <div className="search-container">
    <input type="text" className="input-box" value={inputText} onChange={(event)=>{setinputText(event.target.value); console.log(event.target.value)}}></input>
    <div className="search" onClick={()=>{let filter=allreslist.filter((re)=>{return re.info.name.toLowerCase().includes(inputText.toLowerCase())});setreslist(filter);}}>search</div>
  </div>


   <div>
        <button className="res-btn" onClick={()=>{ setreslist(allreslist.filter((re)=>{return re.info.avgRating>4.3}))}} > TOp rated Rest</button>
       
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