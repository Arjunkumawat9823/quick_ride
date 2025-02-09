import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Btn = () => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="flex items-center gap-2 px-8 sm:px-10
         md:px-12 py-2 sm:py-3 md:py-4  border border-black
          text-sm sm:text-base font-semibold rounded-md hover:bg-amber-400
           hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 
           focus:ring-offset-2 transition duration-300"
        aria-label="See all items"
      >
        See All <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Btn;
