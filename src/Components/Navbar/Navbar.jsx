import react from "react";
import "./Navbar.css";
import cart_icons from "../Assets/cart_icon.png"
import logo from "../Assets/logo.png"
import { useState } from "react";
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    return ( 
        <div className="navbar">
            <div className="navlogo" >
                <img src={logo} alt="" />
                <div className="navlogo-name">
                <span className="urban">Urban</span><span>Styling</span>
                </div>
            </div>
            <ul className = "navmenu">
                <li onClick={()=>setMenu("shop")}>All shop {menu === "shop"? <hr/>: <></>}</li>
                <li onClick={()=>setMenu("men")}>Men {menu === "men"? <hr/>: <></>}</li>
                <li onClick={()=>setMenu("women")}>Women
                {menu === "women"? <hr/>: <></>}
                </li>
                <li onClick={()=>setMenu("kids")}>Kids
                {menu === "kids"? <hr/>: <></>}
                </li>
                <li onClick={()=>setMenu("contact")}>Contact
                {menu === "contact"? <hr/>: <></>}
                </li>
            </ul>
            <div className = "nav-login-cart">
                <button>Sign in</button>
                <img src={cart_icons} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
     );
}
 
export default Navbar;