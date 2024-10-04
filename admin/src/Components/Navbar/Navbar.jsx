import React from "react";
import "./Navbar.css"
import navLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-Profile.svg";
const Navbar = () => {
    return ( 
        <div className="navbar bg-green-300">
            <img src={navLogo} alt=""  className="nav-logo "/>
            <img src={navProfile} alt="" className="nav-profile"/>
        </div>
     );
}
 
export default Navbar;