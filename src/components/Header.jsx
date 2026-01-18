import  resLogo from "../assets/food_logo.png";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
const[login,setlogin]=useState("login");
  const[llogin,setllogin]=useState("login")
  useEffect(()=>{
    console.log("sneha bhingare");
  },[login,llogin]);
  return(
  <div className="header">
      <div className="logo-container">
        <img className="logo" src={resLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={()=>{ login=="login"?setlogin("logout"):setlogin("login")}}>{login}</button>
            <button onClick={()=>{ llogin=="login"?setllogin("logout"):setllogin("login")}}>{login}</button>
          </ul>
      </div>

  </div>
  );
};

export default Header;