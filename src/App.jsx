import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Component/Homepage/HomePage";
import AboutPage from "./Component/AboutPage/AboutPage";
import Restaurant from "./Component/RestaurantPage/Index_Restauran"; // Ensure this exists
import RestaurantDetailPage from "./Component/Restaurant_Detail_Page/RestaurantDetailPage_One";
import Contactus from "./Component/Contact/Contactus";
import ParallaxComponent from "./Component/Parallax";
import Service from "./Component/Service/Service";
import Blog from "./Component/Blog/Blog";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);
  return (
    <BrowserRouter>
      {/* <div
        className="fixed top-0 left-0 w-6 h-6 border-2 z-999 border-blue-500 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restourant" element={<Restaurant />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Restaurant/:id" element={<RestaurantDetailPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contacts" element={<Contactus />} />
        <Route path="/parallax" element={<ParallaxComponent />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
