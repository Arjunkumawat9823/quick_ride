import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import motion from framer-motion
import contect_us from "../../../assets/contect us.png";

const ContactInfoCard = ({ Icon, text, subText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className="p-4 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white shadow-lg"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <Icon className="text-yellow-500 w-6 h-6" />
      </motion.div>
      <p className="mt-2 text-sm font-medium">{text}</p>
      {subText && <p className="text-xs text-gray-500">{subText}</p>}
    </motion.div>
  );
};

const ContactusHerosection = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mt-10 px-6 py-12 flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left lg:ml-10">
        <p className="text-sm text-gray-500 mt-16">
          Home ➝ <span className="hover:text-gray-800 font-medium">Contacts</span>
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Contact Us
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.
        </p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <ContactInfoCard
            Icon={MapPin}
            text="1717 Harrison St, San Francisco, CA 94103, United States"
          />
          <ContactInfoCard
            Icon={Mail}
            text="quick.info@mail.net"
            subText="quick.tech@mail.net"
          />
          <ContactInfoCard
            Icon={Phone}
            text="+1 425 326 16 27"
            subText="+1 235 721 21 64"
          />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <motion.img
          src={contect_us}
          alt="Contact Us"
          className="w-full max-w-[250px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]"
          initial={{ y: -10 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ContactusHerosection;
