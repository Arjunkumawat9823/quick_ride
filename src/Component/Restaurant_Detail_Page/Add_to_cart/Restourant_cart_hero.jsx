import React from "react";
import { FaStar } from "react-icons/fa";
import foottable from "../../../assets/order_homepage.jpg";
import star_img_2 from "../../../assets/star_img_2.jpg";
import { motion } from "framer-motion";

const RestourantCartHero = ({ id, name }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 md:mt-8 lg:mt-0    ">
      {/* Breadcrumb */}

      {/* Main Container */}
      <div className="flex  flex-col  md:flex-row items-center gap-10 md:pl-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center mt-25   md:text-left">
          <div className="flex flex-col items-center md:items-start">
            {" "}
            <p className="text-[16px] text-black font-bold text-center md:text-left   mb-10">
              Home ➜ <span className="text-gray-500">Restaurants</span> ➜{" "}
              <span className="text-yellow-500">
                {id || "Unknown Restaurant"}
              </span>
            </p>
            <div className="flex items-center gap-4">
              <img
                src={star_img_2}
                alt={`${name || "Restaurant"} Logo`}
                className="w-16 h-16 md:w-20 md:h-20  rounded-lg border bg-cover p-1"
              />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
                {name || "Restaurant Name"}
              </h1>
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-center md:justify-start mt-10">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
            ))}
            <FaStar className="text-gray-300 text-xl" />
          </div>

          {/* Cuisines */}
          <div className="flex   justify-center md:justify-start gap-2 mt-4">
            {["american", "steakhouse", "seafood"].map((cuisine) => (
              <span
                key={cuisine}
                className="bg-yellow-100 border text-yellow-800 px-4 py-1 rounded-lg text-sm font-medium capitalize"
              >
                {cuisine}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            Lorem mollis aliquam ut porttitor. Nisl rhoncus mattis rhoncus urna
            neque. Pharetra sit amet aliquam id. Urna nec tincidunt praesent
            semper feugiat nibh.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            className="relative p-2 items-center rounded-3xl"
            initial={{ y: -10 }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <img
              src={foottable}
              alt={`${name || "Restaurant"} Interior`}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-20 h-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RestourantCartHero;
