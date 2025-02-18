import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const QuestionMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen     p-4">
      <div className="   rounded-lg p-6 flex flex-col md:flex-row max-w-7xl mx-auto px-0 md:px-3 w-full">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center   rounded-lg p-6">
          <img
            src="https://img.freepik.com/free-vector/students-thinking-concept-illustration_114360-19834.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid"
            //// Replace with actual image source
            alt="Confused Man"
            className="w-full  md:h-full lg:h-[110%] rounded-lg"
          />
           
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 border rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left">
            Didn't find the answer you are looking for?
          </h2>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus
            in metus vulputate eu scelerisque felis.
          </p>

          <form>
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-10 p-2 border rounded-md"
              />
            </div>
            <div className="mb-4 relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Enter your message"
                className="w-full max-h-20 min-h-20 p-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 text-white p-2 rounded-md">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionMessage;