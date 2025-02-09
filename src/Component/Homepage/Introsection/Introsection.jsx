import React from "react";
import girl from "../../../assets/Food from your.avif";

const Introsection = () => {
  return (
    <div className="box flex flex-col lg:flex-row items-center max-w-7xl mx-auto my-10 px-4">
      {/* Left Section */}
      <div
        className="left lg:w-[50%] w-full flex justify-center mb-6 lg:mb-0"
        data-aos="fade-right"
      >
        <img
          src={girl}
          alt="Girl"
          className="w-full max-w-xs md:max-w-md lg:max-w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div
        data-aos="zoom-in-up"
        className="right lg:w-[50%] w-full text-center lg:text-left"
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-6 transform transition-all duration-700 ease-in-out 
          animate-fade-in scale hover:scale-102 text-black"
        >
          Food from your <br />
          restaurants to your table
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam
          dolore a optio suscipit, enim iste dignissimos eligendi aspernatur
          labore.
        </p>
        <button
          className="bg-yellow-500 hover:bg-[#F29F05] text-white
          px-4 py-2 rounded lg:mt-[30px] my-3 transform transition-all duration-700 ease-in-out 
          animate-fade-in scale hover:scale-102"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Introsection;
