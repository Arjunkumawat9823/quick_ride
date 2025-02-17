import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import {
  FaHome,
  FaUser,
  FaAndroid,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Comp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
      bgColor: "bg-[#3E7BE9]",
    },
    {
      href: "https://wa.me/1234567890",
      icon: <IoLogoWhatsapp />,
      bgColor: "bg-[#1BA201]",
    },
    { href: "https://twitter.com", icon: <FaTwitter />, bgColor: "bg-black" },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
      bgColor: "bg-[#B90095]",
    },
    {
      href: "https://youtube.com",
      icon: <FaYoutube />,
      bgColor: "bg-[#F70000]",
    },
  ];

  return (
    <nav className="fixed bottom-5 z-999 right-5  btn">
      {/* Toggle Button */}
      <button
        className="w-12 h-12 flex items-center justify-center lg:text-3xl bg-black text-blue-900 rounded-full shadow-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`transition-transform duration-300 ${
            menuOpen ? "rotate-45" : ""
          }`}
        >
          <i className="block w-6 h-1 bg-white mb-1"></i>
          <i className="block w-6 h-1 bg-white mb-1"></i>
          <i className="block w-6 h-1 bg-white"></i>
        </div>
      </button>

      {/* Menu */}
      <ul
        className={`absolute bottom-full right-0 mb-4 flex flex-col gap-3 transform transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 hidden"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            
            key={index}
            className="transition-all  text-xl md:text-xl lg:text-2xl duration-300"
          >
            <a
             href={item.href}
             target="_blank"
             rel="noopener noreferrer"
              className={`flex items-center text-2xl    justify-center w-12 h-12 rounded-full shadow-lg ${item.bgColor}`}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Comp;
