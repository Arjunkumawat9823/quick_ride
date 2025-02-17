import React from "react";

const JoinCourierHero = () => {
  return (
    <div className="relative max-w-7xl mx-auto w-full bg-gray-100 py-16 px-4  md:px-12 lg:px-20 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 w-full"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/handshake-executives_1232-143.jpg?t=st=1739794772~exp=1739798372~hmac=49d54743c4b74ab1f862778f2efbfa2b0cba8203e6269be0aeb4dd8f68e07729&w=826')",
        }}
      >
        <div className="fixed inset-0  bg-black opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-white text-center md:text-left px-4">
        <p className="mb-6 mt-20 md:mt-20  lg:mt-30 text-sm sm:text-base">Home = Blog</p>
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold mb-4 mt-0 leading-tight sm:leading-snug">
          Want to join partnership?
        </h1>
        <p className="text-base sm:text-lg mb-6 lg:text-xl md:pr-100 lg:pr-0 ">
          Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere
          urna nec tincidunt praesent semper.
        </p>
      </div>

      {/* Form Card */}
      <div className="absolute   top-90 md:top-50   md:right-5 lg:right-10 lg:top-50 z-10 bg-white md:mt-15 md:p-4  lg:mt-20 p-4 sm:p-6  rounded-lg shadow-lg w-full lg:max-w-sm max-w-sm">
        <h2 className="text-2xl sm:text-xl font-bold mb-4">Join Courier</h2>
        <p className="text-gray-600 mb-6 ">
          Egestas sed tempus urna et pharetra pharetra massa.
        </p>
        <form>
          <div class=" relative mb-3 flex items-center">
            <div class="mr-3">
              <i class="fas fa-user border p-3 rounded-sm"></i>
            </div>
            <input
              type="text"
              placeholder=" Enter your name"
              class="w-full p-2  md:px-2  border rounded pl-10"
            />
          </div>

          <div class="relative mb-3 flex items-center">
            <div class="mr-3">
              <i class="fas fa-phone-alt border p-3 rounded-sm"></i>
            </div>
            <input
              type="text"
              placeholder="Enter your phone"
              class="w-full p-2  md:px-2  border rounded pl-10"
            />
          </div>

          <div class="relative mb-3 flex items-center">
            <div class="mr-3">
              <i class="fas fa-lock border p-3 rounded-sm"></i>
            </div>
            <input
              type="number"
              placeholder="Enter your password"
              class="w-full p-2  md:px-2  border rounded pl-10"
            />
          </div>

          <div class="relative mb-3 flex items-center">
            <div class="mr-3">
              <i class="fas fa-lock border p-3 rounded-sm"></i>
            </div>
            <input
              type="password"
              placeholder="Enter your confirm password"
              class="w-full p-2  md:px-2  border rounded pl-10"
            />
          </div>

          <div class="relative mb-4 flex items-start">
            <div class="mr-3">
              <i class="fas fa-comment-dots  border p-3 rounded-sm"></i>
            </div>
            <textarea
              placeholder="Enter your message"
              class="w-full p-2  md:px-2  min-h-20  max-h-20 border rounded pl-10"
            ></textarea>
          </div>

          <button class="w-full bg-yellow-500 text-white font-bold py-2 sm:py-3 rounded hover:bg-yellow-600 transition flex items-center justify-center">
            <i class="fas fa-paper-plane mr-2"></i> Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinCourierHero;
