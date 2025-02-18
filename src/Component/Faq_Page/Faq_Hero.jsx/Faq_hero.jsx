import React from "react";

const FaqHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-30 justify-between bg-white p-6 md:p-8  max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left lg:pl-10 ">
        <p className="text-gray-500 text-sm lg:mt-[-50px] lg:pb-16">Home ➜ <span className="text-orange-500 font-semibold">FAQ</span></p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl pb-3  font-bold mt-2">Frequently asked questions</h1>
        <p className="  mt-4 text-sm md:text-sm md:pr-10">
          Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
          Mauris augue neque gravida in fermentum et sollicitudin. Amet est
          placerat in egestas erat imperdiet.
        </p>
      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
        <img
          src="https://img.freepik.com/free-photo/young-couple-impressed-woman-smiling-man-wearing-pajamas-man-wearing-glasses-pointing-woman-woman-keeping-hand-chest-both-looking-each-other-isolated-purple-wall_141793-109570.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid" 
          alt="FAQ Section"
          className="max-w-auto h-auto rounded-3xl w-auto md:w-3/4 "
        />
        
      </div>
    </div>
  );
};

export default FaqHero;