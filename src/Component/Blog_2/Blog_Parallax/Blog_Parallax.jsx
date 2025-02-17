import React from "react";

const ParallaxPart = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/food-delivery-concept-pizza-delivery-woman-has-green-fridge-backpack_186523-982.jpg?uid=R153861007&ga=GA1.1.725836799.1712554847&semt=ais_hybrid')",
          height: "100vh",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10    py-12 px-6 md:px-10 lg:px-1">
        {/* Main Text Section */}
        <div className=" text-white  max-w-4xl mx-auto">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
            <span className="text-orange-500 font-semibold">
              incididunt ut labore
            </span>{" "}
            et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae
            congue eu consequat. Id consectetur purus ut faucibus pulvinar
            elementum integer.{" "}
            <span className="text-orange-500 font-semibold">
              Vitae congue mauris
            </span>{" "}
            rhoncus aenean vel elit scelerisque.
          </p>
          <p className="mb-6">
            Una nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
            Enim praesent elementum facilisis leo vel fringilla.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            H2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>

          <p className="font-semibold mb-2">
            Iaculis nunc sed augue lacus viverra.
          </p>
          <p className="mb-6">
            Id consectetur purus ut faucibus pulvinar elementum integer. Vitae
            congue mauris rhoncus aenean vel elit scelerisque.
          </p>

          <p className="font-semibold mb-2">
            Enim praesent elementum facilisis leo vel fringilla est.
          </p>
          <p>
            Porttitor nibh venenatis cras sed felis eget velit aliquet sagittis.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-black max-w-5xl mx-auto my-12 mt-12 text-center">
          <div className="border-l-4 border-yellow-500 pl-4 italic text-white text-lg max-w-4xl mx-auto">
            <span className="text-yellow-500 text-4xl font-bold">“</span>
            Whenever you feel like criticizing any one, he told me, just
            remember that all the people in this world haven’t had the
            advantages that you’ve had.
            <span className="text-yellow-500 text-4xl font-bold">”</span>
          <p className="text-gray-600 mt-4 pb-5">
            Francis Scott Key Fitzgerald, "The Great Gatsby"
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPart;
