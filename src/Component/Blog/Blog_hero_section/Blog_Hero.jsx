import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import blog_img from "../../../assets/blog_img.avif"; // Update path accordingly

const Blog_Hero = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-12 mt-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left lg:pl-6" >
        <p className="text-sm text-black" >
          Home <span className="text-yellow-500">➝ Blog</span>
        </p>
        <h1 className="text-2xl   md:text-3xl lg:text-5xl font-bold leading-tight mt-2"  id="typewriter">
          CURRENT NEWS<br className="hidden  "  /> ABOUT  
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-4 " >
          Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.
        </p>
      </div>

      {/* Right Section - Image & Icons */}
      <div className="md:w-1/2 relative flex justify-center">
        {/* Image with frame effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[800px]"
        >
          <div className="absolute inset-0 rounded-[50px] z-10"></div>
          <img src={blog_img} alt="Blog Hero" className="rounded-[50px]  bg-red-600   " />
        </motion.div>

        {/* Social Icons */}
       
        </div>
      </div>
       
     
   );
};

export default Blog_Hero;
