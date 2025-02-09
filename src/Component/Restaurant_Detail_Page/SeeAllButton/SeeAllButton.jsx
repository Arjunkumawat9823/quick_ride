import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SeeAllButton = () => {
  return (
    <div className="flex justify-center items-center w-full py-4">
      <button className="relative border-2 border-black text-black px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 group overflow-hidden">
        <span className="absolute inset-0 border-2 border-yellow-400 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <span className="relative flex items-center gap-2 text-sm md:text-base lg:text-lg">
          See All <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default SeeAllButton;
