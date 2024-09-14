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
          <Route path="/product" element={<Product />}></Route>
          <Route path="/shopcategory" element={<ShopCategory />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
