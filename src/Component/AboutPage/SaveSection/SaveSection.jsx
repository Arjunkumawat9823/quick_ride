import React from "react";
import saveimg from "../../../assets/save.png";

const SaveSection = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center justify-between px-6 lg:px-20 py-5">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={saveimg} // Replace with your actual image path
          alt="Save Time"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900">
          Our mission is <br />
          <span className="text-[#FF9800]">to save you time</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt
          nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium
          viverra suspendisse potenti nullam ac tortor.
        </p>
        <p className="mt-4 text-gray-600">
          Eget egestas purus viverra accumsan in nisl nisi scelerisque.
          Tincidunt augue interdum velit euismod in pellentesque.
        </p>
      </div>
    </section>
  );
};

export default SaveSection;
