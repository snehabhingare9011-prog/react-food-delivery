import { useEffect, useState } from "react";


const useFetch=(url)=>{
 const [Data,setData]=useState([]);
 console.log("inside the usefetch");
useEffect(()=>{
    console.log(
        "inside the useeffect of fetch"
    );
    const fetchData=async()=>{
    const fetchD=await fetch(url);
    const jsonData= await fetchD.json();
    console.log("beloe the jsonData");
    console.log(jsonData);
    setData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
fetchData();
console.log("snejvvvvvvvvvvvvvvvvvvvvv");
},[url]);

return Data;

};

export default useFetch;