import  resLogo from "../assets/food_logo.png";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";

const Header=()=>{
const[login,setlogin]=useState("login");
const OnlineStatus=useOnlineStatus();

  return(
  <div className="header">
      <div className="logo-container">
        <img className="logo" src={resLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{OnlineStatus=="online"?"🟢":"🔴" }</li>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={()=>{ login=="login"?setlogin("logout"):setlogin("login")}}>{login}</button>
            
          </ul>
      </div>

  </div>
  );
};

export default Header;