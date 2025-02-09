import React, { useState } from "react";

const FormPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
          isSignUp ? "scale-105" : ""
        }`}
      >
        <div className="grid grid-cols-2">
          {/* Sign Up Form */}
          <div
            className={`p-10 transition-all duration-500 ${
              isSignUp ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <h1 className="text-2xl font-bold text-gray-700">Create Account</h1>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-red-600 text-2xl">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="text-blue-500 text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="mt-2 text-gray-500">or use your email for registration</p>
            <input type="text" placeholder="Name" className="w-full p-2 mt-2 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-2 mt-2 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full p-2 mt-2 border rounded-lg" />
            <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg">Sign Up</button>
          </div>

          {/* Sign In Form */}
          <div
            className={`p-10 transition-all duration-500 ${
              isSignUp ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
            <h1 className="text-2xl font-bold text-gray-700">Sign In</h1>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-red-600 text-2xl">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="text-blue-500 text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="mt-2 text-gray-500">or use your account</p>
            <input type="email" placeholder="Email" className="w-full p-2 mt-2 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full p-2 mt-2 border rounded-lg" />
            <a href="#" className="text-blue-500 text-sm mt-2 inline-block">Forgot your password?</a>
            <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg">Sign In</button>
          </div>
        </div>

        {/* Overlay Section */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white transition-all duration-500"
        >
          {isSignUp ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="mt-2">To keep connected with us please login with your personal info</p>
              <button onClick={toggleForm} className="mt-4 px-6 py-2 border border-white rounded-lg">
                Sign In
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="mt-2">Enter your personal details and start your journey with us</p>
              <button onClick={toggleForm} className="mt-4 px-6 py-2 border border-white rounded-lg">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
