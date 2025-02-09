import React from "react";
import Image from "../../../assets/girl_shocked.jpg"; // Replace with actual image path

const Service_Section = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between
     px-6 py-12 max-w-6xl mx-auto bg-gradient-to-r   rounded-lg"
    >
      {/* Left Image Section */}
      <div className="relative w-64 h-64 lg:w-100 lg:h-100 flex-shrink-0">
        <div className="absolute inset-0   rounded-full"></div>
        <img
          src={Image}
          alt="Happy Customer"
          className="w-full h-full object-cover  rounded-full border-8   border-double border-white  shadow-lg relative z-10"
          data-aos="zoom-in"
        />
        <div className="absolute inset-2 border-4 border-white rounded-full"></div>
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 space-y-6">
        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-gray-900">
          Service shows <br className="md:hidden" /> good taste.
        </h2>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 ">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <span className="text-orange-500 text-3xl font-bold">976</span>
            <p className="text-gray-600 text-sm">Satisfied Customer</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <span className="text-orange-500 text-3xl font-bold">12</span>
            <p className="text-gray-600 text-sm">Best Restaurants</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <span className="text-orange-500 text-3xl font-bold">1K+</span>
            <p className="text-gray-600 text-sm">Food Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_Section;
