import React from "react";
import { FaUtensils, FaTags, FaCheckCircle } from "react-icons/fa";

const Delicious = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* First Feature */}
      <div className="text-center flex flex-col items-center   ">
        <div className="bg-white shadow-lg p-6 rounded-full text-amber-500 text-3xl">
          <FaUtensils />
        </div>
        <h3 className="font-bold text-xl mt-4">Free Delivery</h3>
        <p className="text-gray-600 mt-2 md:text-center  max-w-sm">
          Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum integer enim neque volutpat.
        </p>
      </div>

      {/* Second Feature */}
      <div className="text-center flex flex-col items-center">
        <div className="bg-white shadow-lg p-6 rounded-full text-amber-500 text-3xl">
          <FaTags />
        </div>
        <h3 className="font-bold text-xl mt-4">Regular Discounts</h3>
        <p className="text-gray-600 mt-2 md:text-center max-w-sm">
          Morbi leo urna molestie at elementum eu facilisis sed odio. Mattis nunc sed blandit libero volutpat sed cras ornare.
        </p>
      </div>

      {/* Third Feature with List */}
      <div>
        <h3 className="font-bold text-3xl mb-4 text-center md:text-left whitespace-nowrap">Best quality Food <br className="md:hidden  lg:block "  /> and Restaurant</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3 text-gray-600">
            <FaCheckCircle className="text-amber-500 mt-1" /> Duis ultricies lacus sed turpis tincidunt;
          </li>
          <li className="flex items-start gap-3 text-gray-600">
            <FaCheckCircle className="text-amber-500 mt-1" /> Massa tempor nec feugiat nisl pretium;
          </li>
          <li className="flex items-start gap-3 text-gray-600">
            <FaCheckCircle className="text-amber-500 mt-1" /> Lectus vestibulum mattis ullamcorper;
          </li>
          <li className="flex items-start gap-3 text-gray-600">
            <FaCheckCircle className="text-amber-500 mt-1" /> Velit sed ullamcorper morbi tincidunt ornare.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Delicious;