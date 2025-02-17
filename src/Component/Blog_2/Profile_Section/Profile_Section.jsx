import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-10 p-0 lg:px-6 py-20 max-w-5xl mx-auto">
      {/* Previous Post */}
      <div className="flex items-center gap-3 text-left py-10">
        <img
          src="https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid" // Replace with actual image
          alt="Previous Post"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold">
            How Restaurants Can <br /> Engage with Millennials in 2022
          </h3>
          <p className="text-xs text-orange-500">Prev. Posts by this author</p>
        </div>
      </div>

      {/* Profile Center */}
      <div className="flex flex-col items-center text-center ">
        <img
          src="https://img.freepik.com/free-photo/picture-serious-calm-female-with-pleasant-appearance_176532-7182.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid" // Replace with actual author image
          alt="Author"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
        <h3 className="font-bold text-lg mt-2">Roxie Gilbert</h3>
        <p className="text-gray-500 text-sm">Press Secretary, QuickEat</p>
        <div className="flex gap-3 mt-3">
          <FaTwitter className="text-amber-900 hover:text-blue-500 text-3xl  border rounded-2xl p-1  cursor-pointer" />
          <FaInstagram className="text-amber-900 hover:text-pink-500 text-3xl  border rounded-2xl p-1   cursor-pointer" />
          <FaFacebook className="text-amber-900 hover:text-blue-700 text-3xl  border rounded-2xl p-1   cursor-pointer" />
        </div>
      </div>

      {/* Next Post */}
      <div className="flex items-center gap-3 text-right py-10">
        <div>
          <h3 className="text-sm font-semibold">
            Why You Should Optimize <br /> Your Menu for Delivery
          </h3>
          <p className="text-xs text-orange-500">Next Post by this author</p>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/bowl-food-with-side-vegetables-spices_890138-445.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid" // Replace with actual image
          alt="Next Post"
          className="w-16 h-16 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
