import React from "react";
import servies_hero_img from "../../../assets/servies_hero_img.jpg";

const Service_Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 max-w-7xl mx-auto mt-14 py-16 px-4 md:px-16">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-500 text-center md:text-left font-medium">
            Home ➝ <span className="text-amber-500">Services</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold text-gray-900 mt-4 leading-tight">
            Service shows <br className="hidden   " />{" "}
            <span className="text-gray-800">good taste</span>
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base text-center md:text-left">
            Mauris nunc congue nisi vitae suscipit tellus mauris. Ac tincidunt
            vitae semper quis lectus. Sollicitudin ac orci phasellus egestas
            tellus.
          </p>
          <div className="flex items-center justify-center sm:justify-start">
          <button className="mt-6 text-center   md:text-left bg-amber-500 text-white font-semibold  md:px-6 md:py-3 px-3 py-2 rounded-lg hover:bg-amber-600 transition">
            Select Restaurant
          </button>
          </div>
         
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Images & Decorative Elements */}
          <div className="relative flex flex-col gap-6">
            {/* Top Image */}

            <div className="absolute -top-6 right-4 z-2 bg-white shadow-md p-2 md:p-2  text-xl md:text-2xl rounded-lg">
              <p className="text-amber-500 font-bold ">1K+</p>
              <p className="text-gray-600 text-sm">Food Delivered</p>
            </div>

            {/* Bottom Image */}
            <div className="relative bg-white shadow-lg rounded-xl p-2 self-end">
              <img
                src={servies_hero_img}
                alt="Best Restaurant"
                className="rounded-xl object-cover"
              />
              <div className="absolute -bottom-6 left-4 text-xl p-2 md:p-2  md:text-2xl bg-gray-900 text-white shadow-md  rounded-lg">
                <p className="text-amber-400 font-bold ">12</p>
                <p className="text-sm">Best Restaurants</p>
              </div>
            </div>
          </div>

          {/* Decorative Line */}
        </div>
      </div>
    </section>
  );
};

export default Service_Hero;
