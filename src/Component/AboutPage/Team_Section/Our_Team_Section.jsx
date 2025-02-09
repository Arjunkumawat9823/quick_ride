import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Men1 from "../../../assets/happy_men.jpg"; 
import Men2 from "../../../assets/happy_men.jpg"; 
import Men3 from "../../../assets/happy_men.jpg"; 
import Men4 from "../../../assets/happy_men.jpg"; 

const teamMembers = [
  {
    name: "Kevin Adamson",
    role: "UI/UX Designer",
    img: Men1,
    desc: "Pellentesque adipiscing commodo elit at imperdiet dui.",
    social: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
    ],
  },
  {
    name: "Hello",
    role: "Marketing Manager",
    img: Men2,
    desc: "Velit dignissim sodales ut eu sem integer vitae.",
    social: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
    ],
  },
  {
    name: "Edgar Johnson",
    role: "Developer",
    img: Men3,
    desc: "At erat pellentesque adipiscing commodo elit.",
    social: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
    ],
  },
  {
    name: "Michael Smith",
    role: "Software Engineer",
    img: Men4,
    desc: "Amet consectetur adipiscing elit pellentesque habitant.",
    social: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
      { icon: <FaFacebookF />, link: "#" },
    ],
  },
];

const Our_Team_Section = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our dedicated and talented team members who drive our success.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border mx-4 shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {member.social.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-gray-600 hover:text-purple-500 text-xl transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex overflow-x-auto space-x-6 px-4 py-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl border shadow-lg p-6 text-center w-64 flex-shrink-0"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {member.social.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-gray-600 hover:text-purple-500 text-xl transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Team_Section;
