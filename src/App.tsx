import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantLP from "./pages/RestaurantLP";
import BeautySalonLP from "./pages/BeautySalonLP";
import RealEstateLP from "./pages/RealEstateLP";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantLP />} />
        <Route path="/beauty-salon" element={<BeautySalonLP />} />
        <Route path="/real-estate" element={<RealEstateLP />} />
      </Routes>
    </Router>
  );
}

export default App;