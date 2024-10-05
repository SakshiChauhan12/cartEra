import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
    return ( 
        <div className="navbar bg-orange-100 ">
            <div className="navlogo" >
                <img src={logo} alt="" />
            <div>
                <div className="navlogo-name">
                <span className="urban">Urban</span><span>Styling</span>
                </div>
                    <div className="navlogo-name-admin-panel">
                        Admin Panel
                    </div>
            </div>
            </div>
            <img src={navProfile} alt="" className="nav-profile"/>
        </div>
     );
}
 
export default Navbar;