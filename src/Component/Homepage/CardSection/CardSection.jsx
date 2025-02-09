import React, { useState, useEffect } from "react";
import { Star } from "lucide-react"; // Ensure lucide-react is installed or replace with other icons
import girlimg from "../../../assets/girlwithphone.webp";

const CardSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu cursus euismod quis. Quam quisque id diam vel.",
      name: "Thomas Adamson",
      rating: 5,
      img: girlimg,
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Sarah Johnson",
      rating: 4,
      img: girlimg,
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Alex Brown",
      rating: 5,
      img: girlimg,
    },
  ];

  // Autoplay Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  return (
    <div className="relative max-w-7xl mx-auto    overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row min-w-full items-center justify-between gap-6 p-6"
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left  ml-[20px]">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                What customers say about us
              </h2>
              <p className="text-sm md:text-lg mb-6 text-gray-700">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <img
                  src={girlimg}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex justify-center md:justify-start">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="w-60 h-60 md:w-full md:h-80 overflow-hidden lg:w-full lg:h-full">
                <img
                  src={testimonial.img}
                  alt="Customer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
