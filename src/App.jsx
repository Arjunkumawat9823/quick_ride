import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Component/Homepage/HomePage";
import AboutPage from "./Component/AboutPage/AboutPage";
import Restaurant from "./Component/RestaurantPage/Index_Restauran"; // Ensure this exists
import RestaurantDetailPage from "./Component/Restaurant_Detail_Page/RestaurantDetailPage_One";
import Contactus from "./Component/Contact/Contactus";
import Service from "./Component/Service/Service";
import Blog from "./Component/Blog/Blog";
import Blog_2 from "./Component/Blog_2/Blog_2";
import Join_Courier from "./Component/Join_Courier_Section/Join_Courier";
import Windowscrool from "./Windowscrool";
import Faq from "./Component/Faq_Page/Faq";
import Lunch from "./Component/Lunch/Lunch";
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
      <div
        className="fixed top-0 left-0 w-6 h-6 border-2 z-999 border-blue-500 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <Windowscrool />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restourant" element={<Restaurant />} />
        <Route path="/Blog" element={<Blog />} />
        // Blog routing
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/Restaurant/:id" element={<RestaurantDetailPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Blog_2" element={<Blog_2 />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Lunch" element={<Lunch />} />
        <Route path="/contacts" element={<Contactus />} />
        <Route path="/Join_Courier" element={<Join_Courier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
