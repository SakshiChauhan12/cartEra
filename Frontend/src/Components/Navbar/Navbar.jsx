import react, { useContext } from "react";
import "./Navbar.css";
import cart_icons from "../Assets/Navbar/cart_icon.png"
import logo from "../Assets/Navbar/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const navigate = useNavigate();
    const {cartItem,AllProduct} = useContext(ShopContext);
    const countItem = ()=>{
        let count = 0;
        AllProduct.map(e =>{
            if(cartItem[e.id] > 0){
                count+=cartItem[e.id];
            }
        })
        return count;
    }
    const Logout = () =>{
        localStorage.removeItem("auth-token");
        navigate("/loginsignup");
    }
    return ( 
        <div className="navbar bg-orange-100">
            <div className="navlogo" >
                <img src={logo} alt="" />
                <div className="navlogo-name">
                <span className="urban">Urban</span><span>Styling</span>
                </div>
            </div>
            <ul className = "navmenu">
                {localStorage.getItem("auth-token")? <li onClick={()=>setMenu("shop")}>
                <Link to="/">All shop</Link> {menu === "shop"? <hr/>: <></>}</li>: <></>}
                {localStorage.getItem("auth-token")? <li onClick={()=>setMenu("men")}>
                <Link to="/men">Men</Link>  {menu === "men"? <hr/>: <></>}</li>: <></>}
                {localStorage.getItem("auth-token")? <li onClick={()=>setMenu("women")}>
                <Link to="/women">Women</Link> {menu === "women"? <hr/>: <></>}</li>: <></>}
                {localStorage.getItem("auth-token")? <li onClick={()=>setMenu("kids")}>
                <Link to="/kid">Kids</Link> {menu === "kids"? <hr/>: <></>}</li>: <></>}
                {localStorage.getItem("auth-token")?<li onClick={()=>setMenu("contact")}><Link to="/contact">Contact</Link> {menu === "contact"? <hr/>: <></>}</li>: <></>}   
            </ul>
            <div className = "nav-login-cart">
                {localStorage.getItem("auth-token")?<button onClick={Logout} className="signin-button">Logout</button>:
                <Link to="/loginsignup" onClick={() =>setMenu("")}>
                <button className="signin-button">Sign in</button>
                </Link>}
                
                <Link to="/cart" onClick={() =>setMenu("")}>
                <img src={cart_icons} alt="" />
                </Link>
                <div className="nav-cart-count">{countItem()}</div>
            </div>
        </div>
     );
}
 
export default Navbar;


//practise for context.api of menu.
// import react from "react";
// import "./Navbar.css";
// import cart_icons from "../Assets/Navbar/cart_icon.png"
// import logo from "../Assets/Navbar/logo.png"
// import { MenuContext } from "../../Context/Menu";
// import { useContext } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const {menu,setMenu} = useContext(MenuContext)
//     console.log(menu);
//     return ( 
//         <div className="navbar">
//             <div className="navlogo" >
//                 <img src={logo} alt="" />
//                 <div className="navlogo-name">
//                 <span className="urban">Urban</span><span>Styling</span>
//                 </div>
//             </div>
//             <ul className = "navmenu">
//                 <li onClick={()=>setMenu("shop")}>All shop {menu === "shop"? <hr/>: <></>}</li>
//                 <li onClick={()=>setMenu("men")}>Men {menu === "men"? <hr/>: <></>}</li>
//                 <li onClick={()=>setMenu("women")}>Women{menu === "women"? <hr/>: <></>}</li>
//                 <li onClick={()=>setMenu("kids")}>Kids{menu === "kids"? <hr/>: <></>}</li>
//                 <li onClick={()=>setMenu("contact")}>Contact{menu === "contact"? <hr/>: <></>}</li>
//             </ul>
//             <div className = "nav-login-cart">
//                 <Link to="/loginsignup">
//                 <button>Sign in</button>
//                 </Link>
//                 <Link to="/cart">
//                 <img src={cart_icons} alt="" />
//                 </Link>
//                 <div className="nav-cart-count">0</div>
//             </div>
//         </div>
//      );
// }
 
// export default Navbar;