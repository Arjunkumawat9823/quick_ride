import React from "react";

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-2 lg:mx-8 mb-16 bg-white">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white border shadow-md rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-2xl mr-3">
                {feature.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Community Section */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 lg:mx-8 bg-white">
        <div className="w-full lg:w-1/2 relative bg-white">
          <img
            src="https://img.freepik.com/premium-photo/people-holding-hands-field-sunset-sky-is-orange-sun-is-setting-people-are-all-different-ages-races_14117-531718.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid"
            alt="Courier"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bottom-4 left-4 w-16 h-1 bg-yellow-500"></div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the community Quickeat
          </h2>
          <p className="text-gray-600 mb-6">
            Non arcu risus quis varius quam quisque id diam vel. Lorem donec
            massa sapien faucibus et molestie ac.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <p className="text-yellow-500 text-3xl font-bold">74</p>
              <p className="text-gray-600">Couriers in Your City</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <p className="text-yellow-500 text-3xl font-bold">12</p>
              <p className="text-gray-600">Best Restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Friendly Team",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "👥",
  },
  {
    title: "Flexible Schedule",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "📅",
  },
  {
    title: "Official Employment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "📜",
  },
  {
    title: "Stable Income",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "💰",
  },
  {
    title: "Career Growth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "📈",
  },
  {
    title: "Full Insurance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime magnam ipsum, at est officia adipisci saepe perspiciatis ducimus cumque doloribus, sit rerum sed. Placeat ut nemo veniam temporibus? Voluptas.",
    icon: "🛡️",
  },
];

export default Community;