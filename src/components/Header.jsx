import  resLogo from "../assets/food_logo.png";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";

const Header=()=>{
const[login,setlogin]=useState("login");
const OnlineStatus=useOnlineStatus();

  return(
  <div className="header flex justify-between bg-red-100 shadow-lg mx-2 items-center sm:bg-yellow-100 md:bg-red-400" >
      <div className="logo-container">
        <img className="logo w-35" src={resLogo}></img>
      </div>
      <div className="nav-items ">
        <ul className="flex m-7 p-3 gap-7 from-neutral-500 ">
          <li>Online Status :{OnlineStatus=="online"?"🟢":"🔴" }</li>
          <li className=" "> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
           <li> <Link to='/g'>Grocery</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={()=>{ login=="login"?setlogin("logout"):setlogin("login")}}>{login}</button>
            
          </ul>
      </div>

  </div>
  );
};

export default Header;