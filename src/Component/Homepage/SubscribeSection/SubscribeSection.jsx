import React, { useEffect } from "react";
import subscribe from "../../../assets/subscribe.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SubscribeSection = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration in milliseconds
  //     easing: "ease-in-out", // Easing style
  //     once: true, // Whether animation runs only once
  //   });
  // }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10 ">
      {/* Left Illustration */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="slide-right" // AOS animation for sliding right
      >
        <img
          src={subscribe}
          alt="Subscribe Illustration"
          className="w-3/4 lg:w-full"
        />
      </div>

      {/* Right Content */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left mx-18"
        // data-aos="zoom-out-up" // AOS animation for sliding left
      >
        <h2 className="text-3xl lg:text-5xl  md:text-4xl font-bold mb-6 py-6">
          Get the menu of your favorite restaurants every day
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="relative w-full lg:w-2/3">
            <input
              type="email"
              placeholder="🔔 Enter email address"
              className="w-full py-3 px-4 rounded-sm shadow-md text-gray-700 focus:outline-none"
            />
          </div>
          <button className="bg-yellow-500 text-white py-3 px-6 w-full md:w-full md:text-2xl lg:text-xl  lg:w-auto rounded-sm shadow-md hover:bg-yellow-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
