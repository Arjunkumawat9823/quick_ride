import React from 'react';
import { Mail, User, Lock, Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Contact Form Section */}
      <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg w-full md:ml-10">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Get in Touch with Us
        </h2>
        <p className="text-gray-600 mb-6 text-center md:text-left">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.
        </p>
        
        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg bg-gray-100">
            <User className="text-gray-500 w-5 h-5" />
            <input type="text" placeholder="Full Name" className="w-full ml-2 bg-transparent outline-none" />
          </div>
          
          {/* Email */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg bg-gray-100">
            <Mail className="text-gray-500 w-5 h-5" />
            <input type="email" placeholder="Email Address" className="w-full ml-2 bg-transparent outline-none" />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg bg-gray-100">
            <Lock className="text-gray-500 w-5 h-5" />
            <input type="password" placeholder="Password" className="w-full ml-2 bg-transparent outline-none" />
          </div>

          {/* Mobile Number */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg bg-gray-100">
            <Phone className="text-gray-500 w-5 h-5" />
            <input type="number" placeholder="Mobile Number" className="w-full appearance-none ml-2 bg-transparent outline-none" />
          </div>

          {/* Message */}
          <textarea 
            placeholder="Enter your message" 
            className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-gray-100 lg:h-10 max-h-10 min-h-30 "
          ></textarea>

          {/* Submit Button */}
          <button className="bg-yellow-500 text-white py-3 px-6 rounded-lg w-full font-medium hover:bg-yellow-600 transition-all">
            Send a Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="md:w-1/2 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21107.729285026886!2d74.82137860977231!3d26.8006843730125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b8c4017d9889d%3A0x1be3e0295fe00e4c!2sRoopangarh%2C%20Rajasthan%20305814!5e1!3m2!1sen!2sin!4v1738600069475!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="rounded-xl border border-gray-300"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
