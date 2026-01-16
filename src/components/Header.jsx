import  resLogo from "../assets/food_logo.png";
import { useState } from "react";

const Header=()=>{
const[login,setlogin]=useState("login");
  return(
  <div className="header">
      <div className="logo-container">
        <img className="logo" src={resLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button onClick={()=>{ login=="login"?setlogin("logout"):setlogin("login")}}>{login}</button>
          </ul>
      </div>

  </div>
  );
};

export default Header;