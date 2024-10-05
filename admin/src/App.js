import React from "react";
import Navbar from "../../admin/src/Components/Navbar/Navbar.jsx";
import Admin from "../../admin/src/Pages/Admin/Admin.jsx";
import "./App.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
const App = () => {
  return ( 
  <div className="app mx-3">
      <Router>
      <Navbar />
      <Admin />

      </Router>
  </div>
  );
}
 
export default App;