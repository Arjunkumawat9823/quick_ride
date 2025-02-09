import React from "react";

const ParallaxComponent = () => {
  return (
    <div className="relative h-[1000vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4 bg-black/50">
        <h1 className="text-5xl font-bold mb-4">ParallaxComponent Scroll Effect</h1>
        <p className="text-lg max-w-2xl">
          Scroll down to see the effect. The background remains fixed while content moves.
        </p>
      </div>

      {/* Additional Content for Scrolling */}
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
      <div className="relative z-10 bg-white py-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">More Content</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This is additional content to demonstrate the scrolling effect. Keep scrolling to
          see how the ParallaxComponent effect works beautifully with a fixed background.
        </p>
      </div>
    </div>
  );
};

export default ParallaxComponent;
