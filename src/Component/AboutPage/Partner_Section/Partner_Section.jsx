import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Men from "../../../assets/happy_men.jpg";

const partners = [
  { name: "Kings Arms", img: Men },
  { name: "Wilmington", img: Men },
  { name: "Kennington", img: Men },
  { name: "The Victoria", img: Men },
];

const PartnerSection = () => {
  return (
    <div className="py-16 bg-black max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto text-center py-10">
        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto mb-10">
          We collaborate with industry-leading companies to bring the best
          experiences to our customers.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col px-8 mx-8 items-center  bg-white p-10 shadow-lg rounded-lg"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="h-32 w-32 rounded-full border-4 border-black shadow-md object-cover transition-transform duration-300 hover:scale-110"
              />
              <p className="text-lg font-semibold text-gray-700 mt-4">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden px-10   md:bg-amber-700 md:mx-30">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center py-10  bg-white p-4 shadow-lg rounded-lg">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="h-40 w-40 md:w-40 md:h-40  rounded-full border-4 border-black shadow-md object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <p className="text-lg font-semibold text-gray-700 mt-4">
                    {partner.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
