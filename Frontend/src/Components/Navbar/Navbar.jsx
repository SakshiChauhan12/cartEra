
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ShopContext } from "../../Context/Context";
// import react, { useContext } from "react";
import "./Navbar.css";
import cart_icons from "../Assets/Navbar/cart_icon.png"
import logo from "../Assets/Navbar/logo.png"


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem, AllProduct } = useContext(ShopContext);

  const countItem = () => {
    if (!localStorage.getItem("auth-token")) {
      return 0;
    } else {
      let count = 0;
      AllProduct.map(e => {
        if (cartItem[e.id] > 0) {
          count += cartItem[e.id];
        }
      });
      return count;
    }
  };

  const Logout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/loginsignup");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="" className="h-8 w-auto" />
            <div className="ml-2">
              <span className="text-orange-600 font-bold">cart</span>
              <span className="font-semibold text-gray-500">Era</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {localStorage.getItem("auth-token") && (
              <nav className="flex space-x-8">
                <Link to="/" 
                      className={`text-gray-700 hover:text-orange-600 ${menu === "shop" ? "border-b-2 border-orange-600" : ""}`}
                      onClick={() => setMenu("shop")}>
                  All Shop
                </Link>
                <Link to="/men"
                      className={`text-gray-700 hover:text-orange-600 ${menu === "men" ? "border-b-2 border-orange-600" : ""}`}
                      onClick={() => setMenu("men")}>
                  Men
                </Link>
                <Link to="/women"
                      className={`text-gray-700 hover:text-orange-600 ${menu === "women" ? "border-b-2 border-orange-600" : ""}`}
                      onClick={() => setMenu("women")}>
                  Women
                </Link>
                <Link to="/kid"
                      className={`text-gray-700 hover:text-orange-600 ${menu === "kids" ? "border-b-2 border-orange-600" : ""}`}
                      onClick={() => setMenu("kids")}>
                  Kids
                </Link>
                <Link to="/contact"
                      className={`text-gray-700 hover:text-orange-600 ${menu === "contact" ? "border-b-2 border-orange-600" : ""}`}
                      onClick={() => setMenu("contact")}>
                  Contact
                </Link>
              </nav>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {localStorage.getItem("auth-token") ? (
              <button onClick={Logout} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                Logout
              </button>
            ) : (
              <Link to="/loginsignup" onClick={() => setMenu("")}>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                  Sign in
                </button>
              </Link>
            )}
            
            <Link to="/cart" onClick={() => setMenu("")} className="relative">
              <img src={cart_icons} alt="" className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {countItem()}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-700 hover:text-orange-600"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {localStorage.getItem("auth-token") && (
              <>
                <Link to="/"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${menu === "shop" ? "bg-orange-200 text-orange-600" : "text-gray-700"}`}
                      onClick={() => { setMenu("shop"); setIsOpen(false); }}>
                  All Shop
                </Link>
                <Link to="/men"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${menu === "men" ? "bg-orange-200 text-orange-600" : "text-gray-700"}`}
                      onClick={() => { setMenu("men"); setIsOpen(false); }}>
                  Men
                </Link>
                <Link to="/women"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${menu === "women" ? "bg-orange-200 text-orange-600" : "text-gray-700"}`}
                      onClick={() => { setMenu("women"); setIsOpen(false); }}>
                  Women
                </Link>
                <Link to="/kid"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${menu === "kids" ? "bg-orange-200 text-orange-600" : "text-gray-700"}`}
                      onClick={() => { setMenu("kids"); setIsOpen(false); }}>
                  Kids
                </Link>
                <Link to="/contact"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${menu === "contact" ? "bg-orange-200 text-orange-600" : "text-gray-700"}`}
                      onClick={() => { setMenu("contact"); setIsOpen(false); }}>
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
