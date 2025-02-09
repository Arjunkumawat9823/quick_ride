import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const RecordSection = () => {
  const [isCustomersInView, setIsCustomersInView] = useState(false);
  const [isRestaurantsInView, setIsRestaurantsInView] = useState(false);
  const [isDeliveryInView, setIsDeliveryInView] = useState(false);

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "customers") setIsCustomersInView(true);
            if (entry.target.id === "restaurants") setIsRestaurantsInView(true);
            if (entry.target.id === "delivery") setIsDeliveryInView(true);
          }
        });
      },
      {
        threshold: 0.5, // Element should be 50% visible before triggering the observer
      }
    );

    // Observe each section
    const customersSection = document.getElementById("customers");
    const restaurantsSection = document.getElementById("restaurants");
    const deliverySection = document.getElementById("delivery");

    if (customersSection) observer.observe(customersSection);
    if (restaurantsSection) observer.observe(restaurantsSection);
    if (deliverySection) observer.observe(deliverySection);

    // Cleanup observer on component unmount
    return () => {
      if (customersSection) observer.unobserve(customersSection);
      if (restaurantsSection) observer.unobserve(restaurantsSection);
      if (deliverySection) observer.unobserve(deliverySection);
    };
  }, []);

  return (
<div className="flex flex-wrap md:flex-wrap max-w-7xl mx-auto justify-between items-center gap-6 md:px-16 px-4 py-8">
  {/* Services Description */}
  <div className="rounded-lg px-4 shadow py-2 border text-center sm:text-left sm:ml-4  flex-1 min-w-[200px]  text-xl md:text-2xl md:ml-0 sm:font-semibold font-black capitalize">
    Services Shows <br className="hidden sm:hidden " /> Good Taste
  </div>

  {/* Satisfied Customers */}
  <div id="customers" className="rounded-lg px-4 shadow py-4 text-center border flex-1 min-w-[250px] flex flex-col sm:flex-row sm:items-center sm:justify-start lg:text-left">
    <div className="font-black text-3xl sm:text-4xl text-amber-400">
      {isCustomersInView && <CountUp start={0} end={989} duration={4} />}
    </div>
    <div className="sm:ml-4 mt-1 sm:mt-0 text-base sm:text-xl">Customers</div>
  </div>

  {/* Best Restaurants */}
  <div id="restaurants" className="rounded-lg px-4 shadow py-4 text-center flex-1 border min-w-[250px] flex flex-col sm:flex-row sm:items-center sm:justify-start lg:text-left">
    <div className="font-black text-4xl sm:text-4xl text-amber-400">
      {isRestaurantsInView && <CountUp start={0} end={700} duration={5} />}
    </div>
    <div className="sm:ml-4 mt-2 sm:mt-0 text-base sm:text-lg">Best Restaurants</div>
  </div>

  {/* Food Delivery */}
  <div id="delivery" className="rounded-lg px-4 shadow py-4 text-center flex-1 border min-w-[250px] flex flex-col sm:flex-row sm:items-center sm:justify-start lg:text-left">
    <div className="font-black text-4xl sm:text-4xl text-amber-400">
      {isDeliveryInView && <CountUp start={0} end={1000} duration={4} separator="," />}
    </div>
    <div className="sm:ml-4 mt-2 sm:mt-0 text-base sm:text-lg">Food Delivery</div>
  </div>
</div>
  );
};

export default RecordSection;
