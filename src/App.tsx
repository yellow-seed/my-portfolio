import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantLP from "./pages/RestaurantLP";
import BeautySalonLP from "./pages/BeautySalonLP";
import RealEstateLP from "./pages/RealEstateLP";
import MainLayout from "./layouts/MainLayout";
import SampleLayout from "./layouts/SampleLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/restaurant"
          element={
            <SampleLayout>
              <RestaurantLP />
            </SampleLayout>
          }
        />
        <Route
          path="/beauty-salon"
          element={
            <SampleLayout>
              <BeautySalonLP />
            </SampleLayout>
          }
        />
        <Route
          path="/real-estate"
          element={
            <SampleLayout>
              <RealEstateLP />
            </SampleLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;