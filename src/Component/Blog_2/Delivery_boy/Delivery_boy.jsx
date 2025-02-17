import React from "react";

const DeliveryBoy = () => {
  return (
    <div className=" py-12 px-6 md:px-10 lg:px-7 max-w-5xl mx-auto">
      {/* Heading Section */}
      <h3 className="text-3xl font-bold text-amber-800 leading-tight my-6">
        H3 Massa massa ultricies mi quis hendrerit. Sed enim ut sem viverra
        aliquet eget sit amet.
      </h3>
      <p className="text-gray-800 leading-relaxed my-6">
        Velit egestas dui id ornare arcu odio ut. Lacus suspendisse faucibus
        interdum posuere lorem ipsum. Commodo sed egestas egestas fringilla
        phasellus faucibus. Nullam vehicula ipsum a arcu cursus vitae. Nulla
        facilisi morbi tempus iaculis urna id. Tortor dignissim convallis aenean
        et. At erat pellentesque adipiscing commodo elit at.
      </p>

      {/* Image Section - Two Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://media.istockphoto.com/id/1286839922/photo/food-delivery-rider-with-bicycle-delivering-food.jpg?s=612x612&w=0&k=20&c=-H6d2VEue2eS3NImdcUaoDIuxH3DxnMHMFnh2bnwKXM="
          alt="Delivery Boy 1"
          className="w-full h-64 object-cover rounded-lg shadow-md"  data-aos="zoom-in"
        />
        <img
          src="https://media.istockphoto.com/id/1197087612/photo/young-delivery-woman-on-the-street.jpg?s=612x612&w=0&k=20&c=wshLgl6Wh6gCu0LoYv0yuvmtcdTzwiI1ODg5HxkP5W8="
          alt="Delivery Boy 2"
          className="w-full h-64 object-cover rounded-lg shadow-md"   data-aos="zoom-in"
        />
      </div>

      {/* Secondary Section */}
      <h4 className="text-2xl font-bold text-amber-800 mt-12 mb-8">
        H4 Quis imperdiet massa tincidunt nunc pulvinar sapien et. Eu consequat
        ac felis donec et odio. Platea dictumst quisque sagittis purus.
      </h4>
      <p className="text-gray-800 leading-relaxed mb-6">
        In fermentum posuere urna nec. Vestibulum lectus mauris ultrices eros
        in cursus turpis massa. Nisl purus in mollis nunc sed id. At urna
        condimentum mattis pellentesque id. Neque ornare aenean euismod
        elementum nisi quis eleifend quam adipiscing. Sit amet aliquam id diam.
      </p>

      {/* Bullet List Split into Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ul className="list-disc pl-6 marker:text-yellow-500">
          <li>In fermentum posuere urna nec;</li>
          <li>Vestibulum lectus mauris ultrices eros;</li>
          <li>In cursus turpis massa;</li>
        </ul>
        <ul className="list-disc pl-6 marker:text-yellow-500">
          <li>Nisl purus in mollis nunc sed id;</li>
          <li>At urna condimentum mattis;</li>
          <li>Pellentesque habitant morbi tristique.</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center border-t pt-6">
        <span className="text-sm text-gray-500">
          Updated: December 26, 2022
        </span>
        <div className="flex space-x-2">
          <span className="bg-yellow-100 border text-black text-xs px-2 py-1 rounded">
            news
          </span>
          <span className="bg-yellow-100 border text-black text-xs px-2 py-1 rounded">
            quicktext
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBoy;
