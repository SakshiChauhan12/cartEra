import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <Navbar />
      <Router >
        <Routes >
          <Route path="/" element={<Home />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
