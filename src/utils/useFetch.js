import { useEffect, useState } from "react";


const useFetch=(url)=>{
 const [Data,setData]=useState([]);
useEffect(()=>{
    console.log(
        "fjsdkvvvdsdsfh"
    );
    const fetchData=async()=>{
    const fetchD=await fetch(url);
    const jsonData= await fetchD.json();
    setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
fetchData();
},[url]);

return Data;

};

export default useFetch;