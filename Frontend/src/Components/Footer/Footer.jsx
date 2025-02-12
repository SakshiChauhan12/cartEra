// import react from "react";
// import "./Footer.css"
// import { Link } from "react-router-dom";
// import logo from "../Assets/Navbar/logo.png"
// import instagram from "../Assets/Footer/instagram_icon.png"
// import pinterest from "../Assets/Footer/pinterest_icon.png"
// import whatsapp from "../Assets/Footer/whatsapp_icon.png"
// const Footer = () => {
//     return (
//         <div className="footer flex items-center justify-center bg-orange-100 pt-3">
//             <div>
//                 <div className="flex justify-center items-center">
//                     <img src={logo} alt="" />
//                     <div className="footer-title-name flex text-2xl ">
//                         <div className="text-red-600 font-bold ">
//                             Urban
//                         </div>
//                         <div className="text-gray-500 font-extrabold ">
//                             Styling
//                         </div>
//                     </div>
//                 </div>
//                 <ul className="flex justify-center space-x-6 my-5 text-gray-500 text-xl ">
//                     <li><Link to="">Company</Link></li>
//                     <li><Link to="">Products</Link></li>
//                     <li><Link to="">Offices</Link></li>
//                     <li><Link to="">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//                 <ul className="flex justify-center space-x-4 my-4 text-gray-500 ">
//                     <li><Link to=""><img src={instagram} alt=""></img>
//                     </Link></li>
//                     <li><Link to=""><img src={pinterest} alt=""></img>
//                     </Link></li>
//                     <li><Link to=""><img src={whatsapp} alt=""></img>
//                     </Link></li>
//                 </ul>
//                 <div className="copyright text-xl border-t-gray-500 text-gray-500 text-lg mb-3 ">
//                     &copy;2024 by UrbanStyling.
//                     All Rights Reserved Proudly by MIT Students
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Footer;












import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Navbar/logo.png";
import instagram from "../Assets/Footer/instagram_icon.png";
import pinterest from "../Assets/Footer/pinterest_icon.png";
import whatsapp from "../Assets/Footer/whatsapp_icon.png";

const Footer = () => {
    return (
        <footer className="bg-orange-100 px-4md:py-10">
            <div className="max-w-6xl mx-auto">
                {/* Logo Section */}
                <div className="flex justify-center items-center space-x-2">
                    <img 
                        src={logo} 
                        alt="Urban Styling Logo" 
                        className="h-12 w-auto md:h-16"
                    />
                    <div className="text-xl md:text-2xl">
                        <span className="text-red-600 font-bold">Urban</span>
                        <span className="text-gray-500 font-extrabold">Styling</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="my-4">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-xl text-gray-500">
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">Company</Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">Products</Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">Offices</Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">About</Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="my-4">
                    <ul className="flex justify-center gap-4 md:gap-6">
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">
                                <img 
                                    src={instagram} 
                                    alt="Instagram" 
                                    className="w-6 h-6 md:w-8 md:h-8"
                                />
                            </Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">
                                <img 
                                    src={pinterest} 
                                    alt="Pinterest" 
                                    className="w-6 h-6 md:w-8 md:h-8"
                                />
                            </Link>
                        </li>
                        <li className="transition-transform duration-300 hover:scale-110">
                            <Link to="">
                                <img 
                                    src={whatsapp} 
                                    alt="WhatsApp" 
                                    className="w-6 h-6 md:w-8 md:h-8"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright Section */}
                <div className="my-4 pt-4 text-center text-gray-500 text-sm md:text-lg border-t border-gray-300">
                    &copy;2024 by UrbanStyling.
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    All Rights Reserved Proudly by MIT Students
                </div>
            </div>
        </footer>
    );
}

export default Footer;