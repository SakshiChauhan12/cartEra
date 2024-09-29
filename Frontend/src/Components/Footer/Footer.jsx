import react from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from "../Assets/Navbar/logo.png"
import instagram from "../Assets/Footer/instagram_icon.png"
import pinterest from "../Assets/Footer/pinterest_icon.png"
import whatsapp from "../Assets/Footer/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className="footer flex items-center justify-center bg-orange-100 pt-3">
            <div>
                <div className="flex justify-center items-center">
                    <img src={logo} alt="" />
                    <div className="footer-title-name flex text-2xl ">
                        <div className="text-red-600 font-bold ">
                            Urban
                        </div>
                        <div className="text-gray-500 font-extrabold ">
                            Styling
                        </div>
                    </div>
                </div>
                <ul className="flex justify-center space-x-6 my-5 text-gray-500 text-xl ">
                    <li><Link to="">Company</Link></li>
                    <li><Link to="">Products</Link></li>
                    <li><Link to="">Offices</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
                <ul className="flex justify-center space-x-4 my-4 text-gray-500 ">
                    <li><Link to=""><img src={instagram} alt=""></img>
                    </Link></li>
                    <li><Link to=""><img src={pinterest} alt=""></img>
                    </Link></li>
                    <li><Link to=""><img src={whatsapp} alt=""></img>
                    </Link></li>
                </ul>
                <div className="copyright text-xl border-t-gray-500 text-gray-500 text-lg mb-3 ">
                    &copy;2024 by UrbanStyling.
                    All Rights Reserved Proudly by MIT Students
                </div>
            </div>
        </div>
    );
}

export default Footer;