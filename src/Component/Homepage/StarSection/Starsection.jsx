import React from "react";
import img1 from "../../../assets/star_img_1.jpg";
import img2 from "../../../assets/star_img_2.jpg";
import img3 from "../../../assets/star_img_3.jpg";

const restaurants = [
  {
    name: "Kennington Lane Cafe",
    image: img1,
    rating: "★★★★☆",
    tags: ["american", "steakhouse", "seafood"],
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    name: "Another Cafe",
    image: img2,
    rating: "★★★★☆",
    tags: ["italian", "pizza", "dessert"],
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Star Lane Diner",
    image: img3,
    rating: "★★★★☆",
    tags: ["diner", "comfort food", "breakfast"],
    description:
      "Quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.",
  },
  {
    name: "Star Lane Diner",
    image: img3,
    rating: "★★★★☆",
    tags: ["diner", "comfort food", "breakfast"],
    description:
      "Quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.",
  },
];

const RestaurantCard = ({ restaurant }) => (
  <div className="bg-white shadow-md rounded-lg p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-6 group ">
    {/* Image */}
    <img
      src={restaurant.image}
      alt={`${restaurant.name} Logo`}
      className="h-80 w-100 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded mb-4 sm:mb-0 sm:mr-4 object-cover"
    />
    {/* Details */}
    <div className="flex-1">
      <h3 className="text-xl sm:text-lg font-bold text-gray-800">
        {restaurant.name}
      </h3>
      <div className="flex justify-center sm:justify-start items-center mt-1 text-yellow-500">
        <span className="text-xl">{restaurant.rating}</span>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start mt-2">
        {restaurant.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm md:text-sm  border border-black  text-black capitalize rounded px-2 py-1 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm sm:text-base mt-4">
        {restaurant.description}
      </p>
    </div>
  </div>
);

const Starsection = () => {
  return (
    <div className="box">
      <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl group mx-auto">
        {/* Header */}
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800">
            12 Best Restaurants in Your City
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starsection;
