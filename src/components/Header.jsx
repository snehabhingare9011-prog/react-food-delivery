import  resLogo from "../assets/food_logo.png";
import { useState} from "react";
import { Link } from "react-router-dom";

const Header=()=>{
const[login,setlogin]=useState("login");

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
            
          </ul>
      </div>

  </div>
  );
};

export default Header;