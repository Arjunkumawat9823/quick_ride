import React from "react";
import { FaShoppingBasket, FaHeart, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import category from "../../../assets/category.jpg";

const meals = [
  {
    id: 1,
    name: "Fruits with rice chips and...",
    price: 39,
    image: category,
    categories: ["Breakfast", "Lunch"],
  },
  {
    id: 2,
    name: "Vegetables with rice chips ",
    price: 35,
    image: category,
    categories: ["Breakfast", "Lunch"],
  },
  {
    id: 3,
    name: "Pork with vegetables and...",
    price: 45,
    image: category,
    categories: ["Breakfast", "Lunch"],
  },
  
  {
    id: 3,
    name: "Pork with vegetables and...",
    price: 45,
    image: category,
    categories: ["Breakfast", "Lunch"],
  },
];

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl categery_font_style font-bold mb-6 text-center md:text-left">
        See also category <span className="text-yellow-500 categery_font_style">Lunch</span>
      </h2>

      {/* Meal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-6" data-aos="fade-top">
        {meals.map((meal) => (
          <div key={meal.id} className="bg-white p-4 rounded-xl shadow-md w-full max-w-[350px] mx-auto group border">
            <img src={meal.image} alt={meal.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{meal.name}</h3>
              <FaHeart className="text-gray-400 cursor-pointer hover:text-red-500 transition" />
            </div>

            {/* Categories */}
            <div className="flex gap-2 mt-2">
              {meal.categories.map((cat, index) => (
                <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-lg">
                  {cat}
                </span>
              ))}
            </div>

            {/* Price & Quantity */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">${meal.price}</p>
              <div className="flex items-center gap-2">
                <button className="border p-1 rounded-full"><FaMinus /></button>
                <span className="text-lg">1</span>
                <button className="border p-1 rounded-full"><FaPlus /></button>
              </div>
            </div>

            {/* Add to Basket Button */}
            <button className="w-full bg-yellow-500 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg mt-4">
              <FaShoppingBasket /> Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-8 mb-10">
        <button className="border-2 border-yellow-400 text-yellow-500 px-6 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-yellow-400 hover:text-white transition">
          See All <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Category;
