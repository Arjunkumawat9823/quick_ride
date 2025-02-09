import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingBasket, FaPlus, FaMinus } from "react-icons/fa";
import order_img from "../../../assets/food_card.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const MealCard = ({ meal }) => {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(true);

  return (
    <div
      className="border p-4 rounded-xl shadow-lg group w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-44 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
      />
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg md:text-xl">{meal.name}</h3>
          <FaHeart
            className={`cursor-pointer text-2xl ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            onClick={() => setLiked(!liked)}
          />
        </div>

        <div className="flex flex-wrap gap-2 my-2">
          {meal.categories.map((cat) => (
            <span
              key={cat}
              className="bg-yellow-100 border text-yellow-800 px-3 py-1 text-sm rounded-lg"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg sm:text-xl font-bold">${meal.price}</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-amber-50 p-2 rounded border"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              <FaMinus />
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="bg-amber-50 p-2 rounded border"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <button className="bg-green-600 hover:bg-yellow-500 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg w-full mt-4">
          <FaShoppingBasket /> Add to Basket
        </button>
      </div>
    </div>
  );
};

const OrderPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-12   my-10 justify-between items-center p-4 rounded-lg shadow-md bg-white">
        {/* Categories - Responsive & Centered on Mobile */}
        <div className="flex gap-4 sm:gap-6 text-base sm:text-lg md:text-xl font-medium ">
          <span
            className="text-yellow-500 border-b-2 border-yellow-500 pb-1 cursor-pointer transition duration-300"
            data-aos="fade-left"
          >
            Breakfast
          </span>
          <span
            className="text-gray-500 cursor-pointer mx-10 md:mx-0  hover:text-yellow-500 transition duration-300"
            data-aos="fade-right"
          >
            Lunch
          </span>
          <span
            className="text-gray-500 cursor-pointer hover:text-yellow-500 transition duration-300"
            data-aos="fade-left"
          >
            Dinner
          </span>
        </div>

        {/* Favorite Icon - Positioned for Mobile */}
        <FaHeart
          className="text-yellow-500 text-2xl cursor-pointer mt-3 md:mt-0 hover:scale-110 transition duration-300"
          data-aos="flip-right"
        />
      </nav>

      {/* Meals Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2  md:mx-12 lg:grid-cols-3 gap-6 justify-center"
        data-aos="zoom-in"
      >
        {[
          { id: 1, name: "Pasta, kiwi and sauce chilli", price: 39 },
          { id: 2, name: "Potatoes with pork and dried", price: 49 },
          { id: 3, name: "Rice with shrimps and kiwi", price: 49 },
          { id: 4, name: "Pasta, kiwi and sauce chilli", price: 39 },
          { id: 5, name: "Potatoes with pork and dried", price: 49 },
          { id: 6, name: "Rice with shrimps and kiwi", price: 49 },
        ].map((meal) => (
          <MealCard
            key={meal.id}
            meal={{
              ...meal,
              image: order_img,
              categories: ["Breakfast", "Brunch"],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
