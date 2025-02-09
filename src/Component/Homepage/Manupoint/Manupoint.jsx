import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/manuimg_1st.png";
import img2 from "../../../assets/manuing_2ndd.png";
import img3 from "../../../assets/manuimg_3rd.png";

const steps = [
  {
    id: "01",
    title: "Select Restaurant",
    img: img1,
    desc: "Non enim praesent elementum facilisis leo vel fringilla. Quis varius quam quisque id diam vel.",
  },
  {
    id: "02",
    title: "Select Menu",
    img: img2,
    desc: "Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna.",
  },
  {
    id: "03",
    title: "Wait for Delivery",
    img: img3,
    desc: "Nunc lobortis mattis aliquam faucibus. A scelerisque purus semper eget tincidunt arcu non.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 box ">
      <motion.div className="max-w-7xl  mx-auto px-5 text-center " >
        
        {/* Title Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </motion.p>

        {/* Steps Section */}
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 md:mx-14 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center  text-center border bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl shadow-orange-100  transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <motion.img
                src={step.img}
                alt={step.title}
                className="sm:w-46  w-90   lg:w-auto   lg:h-48 mb-6 drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-2">
                {step.id}
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
