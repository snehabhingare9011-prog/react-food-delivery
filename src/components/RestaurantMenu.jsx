import  { useEffect } from 'react'

const RestaurantMenu = () => {
  useEffect(()=>{
    fetchData();
},[]);
const fetchData=async()=>{
    console.log("snehagfgdfgdf bingarew")
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.64886431867022&lng=73.76002306438205&restaurantId=898020&catalog_qa=undefined&submitAction=ENTER");
     console.log(data)
    const jsonData =await data.json();
    console.log(jsonData);
    console.log("sneha")
}
  return (
    <div>
        <h1>Name of tmhe Restaurant</h1>
        <h2>Menu</h2>
    </div>
  )
}

export default RestaurantMenu