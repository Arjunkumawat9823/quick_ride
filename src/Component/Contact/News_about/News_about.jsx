import React from "react";

const NewsAbout = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 mx-7">News about Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0  lg:gap-8  md:gap-1  ">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white border shadow-md rounded-lg md:mx-7 mx-2 my-5 overflow-hidden" data-aos="zoom-out-up">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="absolute top-4 left-4 flex space-x-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <span href="#" className="text-yellow-500 border inline-block  px-5 py-1 rounded font-semibold  whitespace-nowrap items-center space-x-1 cursor-pointer">
  <span className="block">Read More</span>
  {/* <span>&rarr;</span> */}
</span>
              <div className="mt-4 flex items-center text-gray-500 text-sm space-x-4">
                <span>👤 by Quickeat</span>
                <span>📅 {item.date}</span>
                <span>👀 {item.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-lg flex items-center space-x-2 hover:bg-yellow-500 hover:text-white transition">
          <span>See All</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

const newsItems = [
  {
    title: "We Have Received An Award For The Quality Of Our Work",
    description: "Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed...",
    image: "https://img.freepik.com/premium-photo/cheering-young-men-carrying-ukrainian-flag-smiling_425904-3825.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid",
    tags: ["news", "quickeat"],
    date: "01.Jan.2022",
    views: "132",
  },
  {
    title: "With Quickeat you can order food for the whole day",
    description: "Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum...",
    image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19990.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid",
    tags: ["restaurants", "cooking"],
    date: "29.Dec.2022",
    views: "117",
  },
  {
    title: "Quickeat. 127+ Couriers On Our Team!",
    description: "Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl...",
    image: "https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4023.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid",
    tags: ["news", "quickeat"],
    date: "26.Dec.2022",
    views: "153",
  },
  {
    title: "Quickeat. 127+ Couriers On Our Team!",
    description: "Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl...",
    image: "https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19780.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid",
    tags: ["news", "quickeat"],
    date: "26.Dec.2022",
    views: "153",
  },
];

export default NewsAbout;