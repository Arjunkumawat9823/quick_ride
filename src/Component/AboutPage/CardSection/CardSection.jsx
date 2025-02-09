import React from "react";
import { Clock, Utensils, Truck, Tag } from "lucide-react"; // Install Lucide for Icons

const CardSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-1 px-4 sm:px-6 py-8">
      {/* Card 1 */}
      <div className="bg-white shadow-lg p-5 my-4 text-center rounded-lg lg:mx-4 border border-yellow-500
        hover:bg-gradient-to-l hover:from-orange-400 hover:to-orange-600 group 
        transition-all duration-300">
        <Truck className="text-orange-400 mx-auto mb-3 transition-all duration-300 group-hover:text-white" size={40} />
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">
          Free Delivery
        </h3>
        <p className="text-gray-600 mt-2 group-hover:text-white transition-all duration-300">
          Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum integer enim neque volutpat.
        </p>
      </div>

      {/* Card 2 */}
      <div className="shadow-md p-6 text-center my-4  rounded-lg border border-yellow-500 lg:mx-4
        hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-700 group transition-all duration-300">
        <Clock className="text-orange-400 group-hover:text-white mx-auto mb-3 transition-all duration-300" size={40} />
        <h3 className="text-xl font-bold group-hover:text-white">Save Your Time</h3>
        <p className="mt-2 group-hover:text-white">
          Vulputate dignissim suspendisse in est ante in nibh mauris. Pretium nibh ipsum consequat nisl vel pretium lectus quam id.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md p-6 my-4 text-center rounded-lg border border-yellow-500 lg:mx-4
        hover:bg-gradient-to-l hover:from-orange-400 hover:to-orange-600 group 
        transition-all duration-300">
        <Tag className="text-orange-400 mx-auto mb-3 transition-all duration-300 group-hover:text-white" size={40} />
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">
          Regular Discounts
        </h3>
        <p className="text-gray-600 mt-2 group-hover:text-white transition-all duration-300">
          Nec tincidunt praesent semper feugiat nibh. Faucibus nec sagittis aliquam malesuada bibendum arcu.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md p-6  my-4 text-center rounded-lg border border-yellow-500 lg:mx-4
        hover:bg-gradient-to-l hover:from-orange-400 hover:to-orange-600 group 
        transition-all duration-300">
        <Utensils className="text-orange-400 mx-auto mb-3 transition-all duration-300 group-hover:text-white" size={40} />
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">
          Variety Food
        </h3>
        <p className="text-gray-600 mt-2 group-hover:text-white transition-all duration-300">
          Molestie a iaculis at erat pellentesque. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
        </p>
      </div>
    </section>
  );
};

export default CardSection;
