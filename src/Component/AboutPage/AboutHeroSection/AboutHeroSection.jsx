import React from "react";
import heroimg from "../../../assets/aboutherimg.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutHeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:ml-10">
          {/* Breadcrumb */}
          <div className="text-center w-80   rounded-lg  py-2 mx-auto lg:mx-0 ">
            <p className="whitespace-nowrap items-center text-[#B0B0B0] font-semibold text-center lg:text-left">
              Home{" "}
              <FaLongArrowAltRight className="mx-2 inline-block text-black" />
              <span className="text-black">About</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight my-6">
            THE BEST  <span className="text-yellow-500">RESTAYRANTS</span> IN YOUR HOME
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>

          {/* Dropdown + Button */}
          <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full md:w-auto">
              <option>Choose a Restaurant</option>
              <option>Jaipur</option>
              <option>Pali</option>
            </select>
            <button className="bg-yellow-500 text-black px-6 py-2 text-sm rounded-lg hover:bg-yellow-600 w-full md:w-auto">
              Order Now
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img
              src={heroimg}
              alt="Delivery Person"
              className="w-full max-w-xs sm:max-w-full rounded-2xl md:max-w-md lg:max-w-l "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
