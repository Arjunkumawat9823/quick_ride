import React from "react";
import { CheckCircle } from "lucide-react";
import men_eating_food from "../../../assets/men_eaitng_food.jpg";

const DeliicesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center  justify-between px-4 md:px-8 py-12 max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6  ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Wait a minute  for delicious
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Amet massa vitae tortor condimentum lacinia quis. Elit at imperdiet
          dui accumsan sit amet nulla facilisi. Lacus laoreet non curabitur
          gravida arcu ac tortor dignissim.
        </p>
        <h3 className="text-lg font-semibold text-gray-800">
          Interdum varius sit amet mattis.
        </h3>

        {/* List Items */}
        <ul className="space-y-3">
          {[
            "Interdum varius sit amet mattis;",
            "Sed elementum tempus egestas sed sed;",
            "Sit amet purus gravida quis blandit;",
            "Feugiat pretium nibh ipsum consequat nisl vel.",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
              <CheckCircle className="text-orange-500" size={20} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="relative lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-full">
          {/* Image */}
          <img
            src={men_eating_food}
            alt="Delivery"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
          />
          {/* Decorative Outline */}
          <div className="absolute inset-2 border-4 border-orange-400 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default DeliicesSection;
