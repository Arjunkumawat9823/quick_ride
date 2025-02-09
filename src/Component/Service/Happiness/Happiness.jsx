import React from "react";
import { FaClock, FaUtensils } from "react-icons/fa";

const Happiness = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 bg-gradient-to-r from-orange-50 to-orange-100 md:px-16 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
      {/* Left Content */}
      <div className="lg:col-span-1 w-full">
        <h2 className="text-4xl font-bold leading-tight">
          Make your life <br className="hidden" />
          <span className="text-gray-800">easier and happier</span>
        </h2>
        <p className="text-gray-600 mt-4 text-[16px]">
          Risus quis varius quam quisque id diam vel quam elementum. Luctus
          venenatis lectus magna fringilla urna porttitor rhoncus dolor. Mauris
          pharetra at ultrices neque.
        </p>
      </div>

      {/* Right Features */}
      <div className="lg:col-span-2 flex flex-col lg:flex-row gap-8 w-full justify-center">
        {/* Save Your Time Box */}
        <div className="bg-white w-full lg:w-[30%] border border-amber-500 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <div className="text-amber-500 text-6xl mb-4 py-2">
            <FaClock />
          </div>
          <h3 className="text-xl font-bold">Save Your Time</h3>
          <p className="text-gray-600 mt-2 text-[14px]">
            Turpis cursus in hac habitasse platea. Magna fringilla urna
            porttitor.
          </p>
        </div>

        {/* Variety Food Box */}
        <div className="bg-white w-full lg:w-[30%] border border-amber-500 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <div className="text-amber-500 text-6xl mb-4 py-2">
            <FaUtensils />
          </div>
          <h3 className="text-xl font-bold text-amber-500">Variety Food</h3>
          <p className="text-gray-600 mt-2 text-[14px]">
            Tempor orci dapibus ultrices in iaculis nunc sed augue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Happiness;
