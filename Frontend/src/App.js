import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import Footer from './Components/Footer/Footer';
import banner_men from "./Components/Assets/Banner/banner_men.png"
import banner_women from "./Components/Assets/Banner/banner_women.png"
import banner_kid from "./Components/Assets/Banner/banner_kids.png"
function App() {
  return (
    <div>
      <Router >
      <Navbar />
        <Routes >
          <Route path="/" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/loginsignup" element={<LoginSignup />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/men" element={<ShopCategory banner={banner_men} category={"Men"}/>}></Route>
          <Route path="/women" element={<ShopCategory banner={banner_women} category={"Women"}/>}></Route>
          <Route path="/kid" element={<ShopCategory banner={banner_kid} category={"Kid"}/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
