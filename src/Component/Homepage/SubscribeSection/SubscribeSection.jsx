import React, { useEffect } from "react";
import subscribe from "../../../assets/subscribe.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SubscribeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing style
      once: true, // Whether animation runs only once
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left Illustration */}
      <div className="flex justify-center w-full lg:w-1/2" data-aos="slide-right">
        <img src={subscribe} alt="Subscribe Illustration" className="w-3/4 lg:w-full" />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-center md:text-left" data-aos="zoom-out-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-6 py-4">
          Get the menu of your favorite restaurants every day
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="relative w-full lg:w-2/3">
            <input
              type="email"
              placeholder="🔔 Enter email address"
              className="w-full py-3 md:px-2 px-4 rounded-md shadow-md text-gray-700 focus:outline-none border border-gray-300"
            />
          </div>
          <button className="bg-yellow-500  md:mx-2 text-white py-3 px-6 w-full md:w-full lg:w-auto lg:text-lg rounded-md shadow-md hover:bg-yellow-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
