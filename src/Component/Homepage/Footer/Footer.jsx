import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import logo from "../../../assets/logo.png";
import qrCode from "../../../assets/qrcode.webp"; // Import the QR code image

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 max-w-7xl mx-auto">
      <div className=" px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section - Brand Info */}
        <div>
          <img
            src={logo}
            alt="QuickEat Logo"
            className="h-16 w-auto mb-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-white   font-semibold text-3xl md:text-2xl">
            The Best Restaurants in Your Home
          </p>
          <p className="text-base  mt-2 ">
            Experience top-tier restaurants from the comfort of your home with
            our exclusive food delivery services.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/restaurants"
                className="hover:text-white transition duration-300"
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link
                to="/Service"
                className="hover:text-white transition duration-300"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-white transition duration-300"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FaLocationDot className="mt-1 text-yellow-500" />
              <span>
                1717 Harrison St, San Francisco, CA 94103, <br /> United States
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoMail className="text-yellow-500" />
              <a href="mailto:quickeat@mail.net" className="hover:text-white">
                quickeat@mail.net
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdAddCall className="text-yellow-500" />
              <a href="tel:+14253261627" className="hover:text-white">
                +1 425 326 16 27
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-500 text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-500 text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-500 text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-center lg:text-left">
          <h4 className="text-white text-lg font-bold mb-3">Scan & Order</h4>
          <img
            src={qrCode}
            alt="QR Code"
            className="w-40 mx-auto lg:mx-0 shadow-lg rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>© 2022 QuickEat. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white">
            Terms & Services
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
