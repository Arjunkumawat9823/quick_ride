import React from "react";
import { FaUser, FaCalendarAlt, FaEye } from "react-icons/fa";
import sample from "../../../assets/couriermen.jpg";

const NewsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="md:flex justify-between grid sm:grid-cols-1 items-center text-center mb-10">
        <h2 className="md:text-3xl text-4xl lg:text-4xl font-bold text-gray-900">
          Latest News & Events
        </h2>
        <a href="#" className="text-yellow-500 text-xl py-1 self-end whitespace-nowrap font-semibold lg:text-lg flex items-center hover:underline">
          See all <span className="ml-2">→</span>
        </a>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Large News */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src={sample} alt="Main News" className="w-full h-96 object-cover" />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="bg-yellow-500 border text-black px-3 py-1 rounded text-sm font-semibold">News</span>
              <span className="bg-yellow-500 border text-black px-3 py-1 rounded text-sm font-semibold">Quickeat</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We Have Received An Award For The Quality Of Our Work
            </h3>
            <p className="text-gray-600 mb-6">
              Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero. Et magnis dis parturient montes nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.
            </p>
            <a href="#" className="text-yellow-500   font-semibold text-lg flex items-center hover:underline">
              Read More <span className="ml-2">→</span>
            </a>
            <div className="flex items-center text-gray-500 text-sm mt-6">
              <FaUser className="mr-2" /> by Quickeat
              <FaCalendarAlt className="mx-4" /> 01 Jan, 2022
              <FaEye className="ml-4 mr-2" /> 132
            </div>
          </div>
        </div>

        {/* Side News Items */}
        <div className="flex flex-col gap-6 ">
          {["With Quickeat you can order food for the whole day", "127+ Couriers On Our Team!", "Why You Should Optimize Your Menu for Delivery", "The Future of Online Food Delivery", "How Quickeat Ensures Freshness"].map((title, index) => (
            <div key={index} className="flex items-center    rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={sample} alt="Side News" className="w-24 h-24 object-cover m-1 rounded" />
              <div className="p-4 flex-1">
                <div className="flex gap-2 mb-2">
                  <span className="bg-yellow-500 border text-black px-3 py-1 rounded text-xs font-semibold">Restaurants</span>
                  <span className="bg-yellow-500 border text-black px-3 py-1 rounded text-xs font-semibold">Cooking</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">{title}</h4>
                <div className="flex items-center text-gray-500 text-xs">
                  <FaUser className="mr-2" /> by Quickeat
                  <FaCalendarAlt className="mx-2" /> 28 Dec, 2022
                  <FaEye className="ml-2 mr-1" /> {index * 20 + 100}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
