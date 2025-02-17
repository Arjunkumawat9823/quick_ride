import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const BlogHero = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14  bg-gradient-to-r from-[#FFF7E6] via-[#F6F6FF] to-[#FFEDED] p-6 md:p-10 rounded-lg shadow-md">
      <div className=" px-30  md:p-0 lg:px-30    flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className=" md:mb-0 lg:mt-5 ">
          <p className="text-sm  text-gray-500 whitespace-nowrap flex-nowrap">
            Home{" "}
            <FaLongArrowAltRight className="inline-block  mx-2  text-black" />
            Blog Single{" "}
            <FaLongArrowAltRight className="inline-block  mx-2 my-10 text-black" />{" "}
            Blog Page
          </p>
          <div className="mt-4 flex justify-center md:justify-start space-x-2">
            <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded border">
              news
            </span>
            <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded border">
              quickeat
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 my-10">
            127+ Couriers On Our Team!
          </h1>
          <div className="mt-2 text-gray-400 text-sm flex justify-center md:justify-start items-center">
            <span className="mr-2">📅 26 Dec, 2022</span>
            <span>👁️ 117</span>
          </div>
        </div>
        <div className="  mt-10  flex-col   md:flex-row items-center space-x-0 md:space-x-4">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-stylish-woman-knitted-hat-standing-front-olive-tree_152637-9434.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid"
            alt="Roxie Gilbert"
            className="w-20 h-20 md:w-30 md:h-30 lg:w-40  lg:h-40 justify-center mx-auto rounded-full border-2 border-white bg-center shadow-md"
          />
          <div className="text-center mt-4 md:text-center">
            <p className="font-bold text-gray-900">Roxie Gilbert</p>
            <p className="text-gray-500 text-sm">Press Secretary Quickeat</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
