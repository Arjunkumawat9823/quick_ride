import React from "react";
import { FaPizzaSlice, FaDrumstickBite, FaFish, FaHamburger, FaUtensils } from "react-icons/fa";
import succss_img from '../../../assets/Order_Success.jpg'

const Relax = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side Image with Overlay */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={succss_img}
          alt="Delivery Service"
          className="rounded-xl shadow-lg w-full"
        />
        {/* <div className="absolute bottom-6 left-6 bg-black p-4 rounded-lg shadow-md border-2 border-amber-500">
          <span className="text-4xl font-bold text-amber-500">976</span>
          <p className="text-gray-600 text-sm">Satisfied Customer</p>
        </div> */}
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Sit at Home We Will <br className="md:hidden" /> Take Care Your Order
        </h2>
        <p className="text-gray-600 mt-4">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.
        </p>

        {/* Food Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
            <FaPizzaSlice className="text-amber-500" /> Pizza
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
            <FaUtensils className="text-amber-500" /> Steaks
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
            <FaHamburger className="text-amber-500" /> Burgers
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
            <FaDrumstickBite className="text-amber-500" /> Chicken
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
            <FaFish className="text-amber-500" /> Fish
          </div>
        </div>

        {/* Order Now Button */}
        <button className="mt-6 bg-amber-500 text-white px-6 py-3    w-full rounded-lg shadow-md hover:bg-amber-600 transition">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Relax;