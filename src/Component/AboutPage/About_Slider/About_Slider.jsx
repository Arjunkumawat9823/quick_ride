import React from "react";
import waterimg from "../../../assets/water_flowing.jpg"; // ✅ Import image

const SubscriptionBanner = () => {
  return (
    <div
      className="relative max-w-7xl mx-auto py-16 px-6 flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${waterimg})` }} // ✅ Background Image
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 text-center w-full">
        {/* Heading */}
        <h2 className="text-white text-3xl lg:text-5xl   md:text-4xl font-bold mb-6">
          Get the menu of your favorite restaurants every day
        </h2>

        {/* Subscription Form - Input & Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full lg:w-1/2 mx-auto">
          {/* Input Field */}
          <input
            type="email"
            placeholder="🔔 Enter email address"
            className="w-full md:flex-1 py-3 px-4 rounded-sm shadow-md bg-white text-gray-700 focus:outline-none"
          />

          {/* Subscribe Button */}
          <button className="bg-yellow-500 text-white py-3 px-6 w-full md:w-auto md:text-xl rounded-sm shadow-md hover:bg-yellow-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
