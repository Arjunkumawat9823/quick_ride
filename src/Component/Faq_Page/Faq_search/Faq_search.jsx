
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FaqSearch = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const tabs = ["Delivery", "Technical", "Restaurants"];

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 md:px-10">
      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row justify-between items-center  pb-2">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm md:text-base font-semibold pb-2 transition-all duration-300 ${
                activeTab === tab ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Search Bar */}
        <div className="relative mt-3 md:mt-0 w-full md:w-80">
          <input
            type="text"
            placeholder="Enter question keywords"
            className="w-full py-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default FaqSearch;