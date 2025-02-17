import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="text-black max-w-7xl Z-999 mx-auto fixed top-0 left-0 right-0 z-50 bg-opacity-60 bg-black w-full">
      <nav className="text-yellow-400 p-4">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link to="/">
              <img src={logo} alt="Brand Logo" className="h-12 w-auto lg:pl-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 lg:mr-[300px] font-roboto font-bold">
            <Link to="/" className="p-2 mx-3 rounded bg-black hover:text-white">Home</Link>
            <Link to="/about" className="p-2 mx-3 rounded bg-black hover:text-white">About Us</Link>
            <Link to="/restourant" className="p-2 mx-3 rounded bg-black hover:text-white flex items-center">
              Restaurant <IoMdArrowDropdown className="ml-1" />
            </Link>
            <Link to="/Blog" className="p-2 mx-3 rounded bg-black hover:text-white flex items-center">
            Blog <IoMdArrowDropdown className="ml-1" />
            </Link>
            <Link to="/Blog_2" className="p-2 mx-3 rounded bg-black hover:text-white">Blog-2</Link>
            <Link to="/contacts" className="p-2 mx-3 rounded bg-black hover:text-white">Contacts</Link>
          </div>

          {/* Cart & Order Button */}
          {!isMobileMenuOpen && (
            <div className="hidden lg:flex items-center space-x-4 bg-black">
              <button className="relative group p-2 rounded overflow-hidden border-2 border-transparent">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 transition-transform duration-500 ease-linear transform scale-0 group-hover:scale-150 group-hover:rotate-180"></span>
                <span className="absolute inset-0 w-full h-full bg-black rounded opacity-100"></span>
                <FaShoppingCart className="relative z-10 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded lg:mr-4">
                Order Now
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="fixed top-0 right-0 w-64 h-full  bg-black text-yellow-400 p-6 flex flex-col space-y-6 shadow-lg lg:hidden mobile-menu"
        >
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl self-end">
            <AiOutlineClose />
          </button>

          <div className="bg-black   w-90 rounded">
            <div className="border-b block">
              <Link to="/" className="block py-4 text-xl rounded hover:underline">Home</Link>
            </div>
            <div className="border-b block">
              <Link to="/about" className="block py-4 text-xl rounded hover:underline">About Us</Link>
            </div>
            <div className="border-b block">
              <Link to="/restourant" className="block py-4 text-xl rounded hover:underline">Restaurant</Link>
            </div>
            <div className="border-b block">
              <Link to="/service" className="block py-4 text-xl rounded hover:underline">Service</Link>
            </div>
            <div className="border-b block">
              <Link to="/contacts" className="block py-4 text-xl rounded hover:underline">Contacts</Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
