import React, { useEffect, useState } from "react";
import couriermen from "../../../assets/couriermen.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const LearnSection = () => {
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const section = document.getElementById("learn-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="learn-section"
      className="max-w-7xl mx-auto bg-[#000] text-white py-6 opacity-0 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: isInView ? 1 : 0 }}
    >
      <div>
        <h1 className="text-center text-2xl lg:text-4xl font-bold py-3 animate__animated animate__fadeInUp animate__delay-1s">
          Want To Join Partnership
        </h1>
      </div>
      <div className="section w-[100%] flex justify-around items-center relative py-2 lg:mx-0 flex-wrap">
        <div className="left lg:mr-15">
          <img
            src={couriermen}
            alt="Courier"
            className="lg:w-100 rounded-[30px] w-80 my-10 px-0 ml-[-10px] lg:ml-0 animate__animated animate__fadeInLeft animate__delay-2s"
          />
          <div
            className="absolute lg:top-[-10px] lg:left-[110px] mt-8 w-[320px] lg:w-[410px] lg:h-[280px] h-[210px] top-[0px] rounded-4xl bg-none lg:border-4 border-2 border-yellow-300"
          >
            <h1 className="text-xl lg:text-2xl font-bold pl-5 lg:mt-[180px] mt-30">
              Join Courier
            </h1>
            <button
              className="bg-yellow-500 lg:text-xl text-sm lg:px-3 lg:py-1 py-1 px-2 ml-5 mt-2 lg:ml-5 whitespace-nowrap flex items-center rounded-sm transform hover:scale-105 transition-transform duration-300"
            >
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="right lg:ml-15">
          <img
            src={couriermen}
            alt="Courier"
            className="lg:w-100 rounded-[30px] w-80 my-10 px-0 ml-[-10px] lg:ml-0 animate__animated animate__fadeInRight animate__delay-2s"
          />
          <div className="absolute lg:top-[-20px] lg:right-[50px] mt-[310px] md:mt-[20px] 
          h-[210px] w-[320px] lg:w-[410px] lg:h-70 lg:mt-10 top-[10px] rounded-4xl bg-none
           lg:border-4 border-2 border-yellow-300">
            <h1 className="text-xl lg:text-2xl font-bold pl-5 lg:mt-[180px] mt-30">
              Join Courier
            </h1>
            <button
              className="bg-yellow-500 lg:text-xl text-sm lg:px-3 lg:py-1 py-1 px-2
               ml-5 mt-2 lg:ml-5 whitespace-nowrap flex items-center rounded-sm transform
                hover:scale-105 transition-transform duration-300"
            >
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
