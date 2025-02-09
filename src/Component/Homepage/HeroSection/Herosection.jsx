import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import heroimg from "../../../assets/hero_img.png";

const HeroSection = () => {
  return (
    <div className="relative  overflow-hidden py-12 mt-10
      ">
      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2) 0%,rgba(0,0,0,0) 60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 mt-10 md:px-8 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:ml-10">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold  leading-tight mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            THE BEST
            <span className="text-[#FF9000]"> RESTAYRANTS </span>  
           IN YOUR HOME
          </motion.h1>
          <p className="text-white text-sm md:text-base mb-6">
            Experience delicious food from the best restaurants, delivered right to your home.
          </p>
          <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <select className="border border-gray-300 bg-white appearance-none rounded-lg px-4 py-2 text-sm w-full md:w-auto shadow-lg">
              <option>Choose a Restaurant</option>
              <option>Jaipur</option>
              <option>Pali</option>
            </select>
            <motion.button
              className="bg-yellow-400 text-black px-6 py-2 text-sm font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 w-full md:w-auto shadow-lg"
              // whileHover={{ scale: 1.1 }}
            >
              Order Now
            </motion.button>
          </div>
        </div>

        {/* Right Content with 3D Animated Image */}
        <div className="lg:w-1/2 relative flex justify-center">
          <motion.img
            src={heroimg}
            alt="Delivery Person"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-lg"
            initial={{ rotateY: 20, scale: 0.9 }}
            animate={{ rotateY: [20, -20, 20], scale: [1, 1.1, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
