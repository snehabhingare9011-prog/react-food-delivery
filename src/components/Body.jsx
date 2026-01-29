 import RestaurantCard from "./RestaurantCard";
 import { useEffect, useState } from "react";
 import Shimmer from "./Shimmer";
 import {Link} from 'react-router-dom';
 import useFetch from "../utils/useFetch";
import useOnlineStatus from "../utils/UseOnlineStatus";


const Body=()=>{
  
  const[allreslist,setallreslist]=useState([]);
  const[reslist,setreslist]=useState([]);
  const[inputText,setinputText]=useState("");
   const Data=useFetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.64886431867022&lng=73.76002306438205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   console.log("Data inside the body:",Data);

  useEffect(() => {
    if (Data) {
      console.log("inside use effect of body");
      setallreslist(Data);
      setreslist(Data);
    };
  }, [Data]);

  const OnlineStatus=useOnlineStatus();

  if(OnlineStatus=="offline"){
    return <h1>You are Offline</h1>
  }
 

  // const fetchdata=async()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.64886431867022&lng=73.76002306438205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     console.log(data.status)
  //   const json= await data.json();
        // console.log(json)
        // console.log(json?.data);
  //   setallreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  // }
  //  useEffect(()=>{
  //    fetchdata();
  // },[]);

return reslist.length==0?(<div> <Shimmer></Shimmer>{console.log("shimmer ui renderd")}</div>):(
<div className="body">
  {/* <div className="search-container">
    <input type="text" className="input-box" value={inputText} onChange={(event)=>{setinputText(event.target.value); console.log(event.target.value)}}></input>
    <div className="search" onClick={()=>{let filter=allreslist.filter((re)=>{return re.info.name.toLowerCase().includes(inputText.toLowerCase())});setreslist(filter);}}>search</div>
  </div>


   <div>
        <button className="res-btn" onClick={()=>{ setreslist(allreslist.filter((re)=>{return re.info.avgRating>4.3}))}} > TOp rated Rest</button>
       
   </div> */}
<div className="filter-bar  flex justify-center mt-8 items-center mb-2">
  <div className="search-box">
    <input
      type="text"
      className="input-box border border-solid border-black p-1"
      value={inputText}
      onChange={(e) => setinputText(e.target.value)}
      placeholder="Search restaurants..."
    />
    <button
      className="search-btn text-4 font-semibold border border-solid bg-green-100 py-1 hover:bg-green-200  rounded-lg px-4 mx-2 cursor-pointer"
      onClick={() => {
        const filter = allreslist.filter((re) =>
          re.info.name.toLowerCase().includes(inputText.toLowerCase())
        );
        setreslist(filter);
      }}
    > Search
    </button>
  </div>
 <button
    className="top-rated-btn border border-solid border-black font-bold bg-amber-100 cursor-pointer px-3 hover:bg-amber-200 py-1 rounded-lg"
    onClick={() =>
      setreslist(allreslist.filter((re) => re.info.avgRating > 4.3))
    }
  >
    ⭐ Top Rated
</button>
</div>

 

  <div className="res-container  flex  flex-wrap  justify-center gap-6  px-3 mt-6">
     {/* <RestaurantCard  resData={reslist[0]} /> 
     <RestaurantCard  resData={reslist[1]}/> */}

     { 
      reslist.map((restaurants)=>{
      
       return <Link to='/restaurant/:id' key={restaurants.info.id}><RestaurantCard  resData={restaurants}></RestaurantCard></Link>

      })
     }
      
  </div>
</div>
  );
}

export default Body;