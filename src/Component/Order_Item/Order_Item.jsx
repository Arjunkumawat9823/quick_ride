import React, { useEffect } from "react";
import { FaUser, FaCalendarAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Link import किया
import order_img from "../../assets/orde_item_img.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ AOS styles import किए

const OrderItem = ({ image, tags, title, description, author, date, views }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border md:mx-2">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <div className="absolute top-2 left-2 flex gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-amber-300 text-black text-xs px-2 py-1 rounded border border-black">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="flex items-center text-gray-400 text-xs mt-4 gap-2">
        <div className="flex items-center">
          <FaUser className="mr-1" /> <span>{author}</span>
        </div>
        <span>•</span>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1" /> <span>{date}</span>
        </div>
        <span>•</span>
        <div className="flex items-center">
          <FaEye className="mr-1" /> <span>{views} views</span>
        </div>
      </div>
    </div>
  );
};

const OrderList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const orders = [
    {
      image: order_img,
      tags: ["news", "quickeat"],
      title: "With Quickeat you can order food for the whole day",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "by Vendor",
      date: "01 Jan, 2022",
      views: 250,
    },
    {
      image: order_img,
      tags: ["news", "quickeat"],
      title: "Quickeat makes food ordering easy ordering easy",
      description: "Get fresh meals delivered    delivered anytime, anywhere...",
      author: "by Admin",
      date: "05 Jan, 2022",
      views: 500,
    },
    {
      image: order_img,
      tags: ["restaurants", "cooking"],
      title: "How Restaurants Can Engage with Millennials in 2022",
      description: "Learn how modern restaurants attract young customers...",
      author: "by Vendor",
      date: "10 Jan, 2022",
      views: 320,
    },
    {
      image: order_img,
      tags: ["menu", "delivery"],
      title: "Why You Should Optimize Your Menu for Delivery",
      description: "Best practices for designing a profitable menu...",
      author: "by Foodie",
      date: "15 Jan, 2022",
      views: 410,
    },
    {
      image: order_img,
      tags: ["food trends", "2022"],
      title: "5 Big Food Trends Coming Your Way in 2022",
      description: "Check out the latest trends shaping the food...",
      author: "by Expert",
      date: "20 Jan, 2022",
      views: 600,
    },
    {
      image: order_img,
      tags: ["food trends", "2022"],
      title: "5 Big Food Trends Coming Your Way in 2022",
      description: "Check out the latest trends shaping the food...",
      author: "by Expert",
      date: "20 Jan, 2022",
      views: 600,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto lg:px-13 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {orders.map((order, index) => (
          <Link to={`/Blog/${index}`} key={index}>
            <OrderItem {...order} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/all-orders">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition">
            See All →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderList;
