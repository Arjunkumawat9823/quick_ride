import React from "react";

const LunchHero = () => {
  return (
    <div className="mt-30 text-center py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-black pb-6" data-aos="fade-up">
        <span className="text-gray-400">Home</span> <span className="mx-1">→</span>{" "}
        <span className="text-gray-600 font-medium">Pricing Table</span>
      </nav>

      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl py-7 lg:text-6xl font-bold text-gray-800"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Lunch sets
      </h1>

      {/* Description */}
      <p
        className="text-gray-500 mt-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Mauris augue neque gravida in fermentum et sollicitudin.
      </p>
    </div>
  );
};

export default LunchHero;
