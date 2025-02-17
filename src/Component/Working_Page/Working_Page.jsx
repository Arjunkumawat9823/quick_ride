import React from "react";
import order_compc from "../../assets/order_comp.jpg"
import { FaUser, FaCalendarAlt, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';  // Import Link for routing


const WorkingPage = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white    p-6 flex flex-col md:flex-row items-center" >
      <div className="md:w-1/2 w-full relative" data-aos="fade-up">
        <img
          src={order_compc}
          alt="Award Celebration"
          className="w-full h-full rounded-lg"
        />
        <div className="flex gap-2 mt-2 absolute top-1 md:top-1 md:ml-10 ">
          <span className="bg-amber-300 text-black text-xs px-3 py-1 rounded border border-black">news</span>
          <span className="bg-amber-300 text-black text-xs px-3 py-1 rounded border border-black">quickeat</span>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:pl-6 mt-4 md:mt-0" data-aos="fade-up">
        <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-gray-900 md:py-2 py-3 ">
          We Have Received An Award For The Quality Of Our Work
        </h2>
        <p className="text-gray-600 mt-1 lg:mt-3 text-sm md:text-sm lg:pr-10">
          Velit laoreet id donec ultrices. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper...
          Velit laoreet id donec ultrices. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper...
          Velit laoreet id donec ultrices. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper...
          Velit laoreet id donec ultrices. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper...
        </p>
        <a href="#" className=" text-black bg-amber-500 font-semibold text-sm lg:mt-5 my-3 px-3 py-1 rounded inline-block">
          Read More →
        </a>
        <div className="flex flex-wrap   text-[12px] md:text-sm md:justify-start items-center text-gray-400  mt-2 lg:mt-4 gap-2">
          <div className="flex items-center">
            <FaUser className="mr-1" /> <span>by Quickeat</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" /> <span>01 Jan, 2022</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center">
            <FaEye className="mr-1" /> <span>132 views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingPage;