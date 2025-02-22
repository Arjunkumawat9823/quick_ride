import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Lunch_order_item = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const plans = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/top-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk_140725-49964.jpg",
      quantity: "x3",
      price: "$112",
      title: "Small Business Lunch",
      description: "Delicious and healthy meal, perfect  ",
      features: ["Fresh ingredients", "Perfect for office", "Low-calorie options", "Fast delivery"],
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/top-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk_140725-49964.jpg",
      quantity: "x6",
      price: "$270",
      title: "Large Business Lunch",
      description: "A fulfilling meal set for bigger teams.",
      features: ["Serves up to 6 people", "Customizable menu", "Freshly made daily", "Best for corporate"],
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/top-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk_140725-49964.jpg",
      quantity: "x6",
      price: "$270",
      title: "Large Business Lunch",
      description: "A fulfilling meal set for bigger teams.",
      features: ["Serves up to 6 people", "Customizable menu", "Freshly made daily", "Best for corporate"],
    },
  ];

  return (
    <div className="  max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-20">
        Choose Your Perfect Lunch Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 relative"
            data-aos="fade-up"
          >
            <div className="h-40 w-full">
              <img src={plan.img} alt={plan.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 relative group">
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-gray-700">{plan.quantity}</span>
                <span className="text-xl font-bold text-yellow-500">{plan.price}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
              <ul className="text-sm text-gray-700 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-5 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch_order_item;