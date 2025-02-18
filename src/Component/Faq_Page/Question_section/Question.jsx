import React from "react";

const questions = [
  {
    id: 1,
    title:
      "Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere?",
    description:
      "Quis auctor sagittis eu volutpat odio facilisis mauris. Id nibh tortor id aliquet lectus proin nibh nisl. Eu turpis egestas pretium aenean pharetra magna ac placerat...",
  },
  {
    id: 2,
    title:
      "Id neque aliquam vestibulum morbi. Integer vitae justo eget magna fermentum iaculis eu non diam. Nam libero justo laoreet sit amet cursus sit amet. Fringilla dictumst quisque sagittis purus sit amet volutpat consequat?",
    description:
      "Condimentum mattis pellentesque id nibh tortor id aliquet. Massa id neque aliquam vestibulum morbi blandit cursus. Eu facilisis sed odio morbi quis commodo...",
  },
  {
    id: 3,
    title:
      "Mi pretium sed libero enim sed faucibus turpis in. Tristique senectus et netus et malesuada fames ac turpis. Congue eu consequat ac felis. Fringilla urna porttitor rhoncus dolor purus non enim?",
    description:
      "Neque egestas congue quisque egestas diam in arcu. Vitae et leo duis ut diam quam nulla porttitor massa id. Augue interdum velit euismod in pellentesque...",
  },
  {
    id: 4,
    title:
      "Ullamcorper at amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque sagittis egestas diam in arcu cursus?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ultrices mi tempus imperdiet nulla malesuada...",
  },
  {
    id: 4,
    title:
      "Ullamcorper at amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque sagittis egestas diam in arcu cursus?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ultrices mi tempus imperdiet nulla malesuada...",
  },
  {
    id: 4,
    title:
      "Ullamcorper at amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque sagittis egestas diam in arcu cursus?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ultrices mi tempus imperdiet nulla malesuada...",
  },
  {
    id: 4,
    title:
      "Ullamcorper at amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque sagittis egestas diam in arcu cursus?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ultrices mi tempus imperdiet nulla malesuada...",
  },
  {
    id: 4,
    title:
      "Ullamcorper at amet risus nullam eget felis eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quisque sagittis egestas diam in arcu cursus?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ultrices mi tempus imperdiet nulla malesuada...",
  },
];

const Question = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 bg-white lg:px-14 rounded-lg">
      {questions.map((q) => (
        <div key={q.id} className="border-b py-4">
          <h2 className="text-lg font-semibold py-2">Question:- {q.title}</h2>
          <p className="text-gray-600 mt-2 py-2">{q.description}</p>
          <textarea
            className="w-full mt-2 p-2 min-h-20 max-h-20 border rounded"
            placeholder="Type your answer here..."
          ></textarea>
        </div>
      ))}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Submit All Questions
      </button>
    </div>
  );
};

export default Question;
