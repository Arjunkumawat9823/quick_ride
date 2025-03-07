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

  return (
    <div className="text-black max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 bg-opacity-60 bg-black w-full">
      <nav className="text-yellow-400 p-4">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl">
            <Link to="/">
              <img src={logo} alt="Brand Logo" className="h-12 w-auto lg:pl-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden  lg:flex space-x-4 lg:mr-[200px] font-roboto">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/restourant", label: "Restaurant" },
              { to: "/blog", label: "Blog" },
              { to: "/blog_2", label: "Blog-2" },
              { to: "/faq", label: "Faq" },
              { to: "/lunch", label: "Lunch" },
               { to: "/contacts", label: "Contacts" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="p-2 mx-3 rounded bg-black hover:text-white flex items-center"
              >
                {item.label} {item.to === "/restourant" || item.to === "/blog" ? <IoMdArrowDropdown className="ml-1" /> : ""}
              </Link>
            ))}
          </div>

          {/* Cart & Order Button */}
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
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className={`fixed top-0 right-0 w-64 h-full bg-black text-yellow-400 shadow-lg lg:hidden mobile-menu transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between p-6">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl">
              <AiOutlineClose />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-70px)]">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/restourant", label: "Restaurant" },
              { to: "/blog", label: "Blog" },
              { to: "/blog_2", label: "Blog-2" },
              { to: "/service", label: "Service" },
              { to: "/join_courier", label: "Join Courier" },
              { to: "/faq", label: "Faq" },
              { to: "/lunch", label: "Lunch" },
              { to: "/contacts", label: "Contacts" },
            ].map((item, index) => (
              <div key={index} className="border-b">
                <Link
                  to={item.to}
                  className="block py-4 px-6 text-xl rounded hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
