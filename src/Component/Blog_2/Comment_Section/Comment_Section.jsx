import React from "react";
import { FaReply } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const comments = [
  {
    id: 1,
    name: "Jackie Johnson",
    date: "12 Jan, 2022",
    comment:
      "Vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    replies: [
      {
        id: 2,
        name: "Annie Adamson",
        date: "18 Dec, 2022",
        comment: "Auctor urna nunc id cursus metus. Fica donec ac odio tempor orci dapibus ultrices.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        name: "Annie Adamson",
        date: "18 Dec, 2022",
        comment: "Ac felis donec ac odio pellentesque. Armet nisl suscipit adipiscing bibendum.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      ,
      {
        id: 3,
        name: "Annie Adamson",
        date: "18 Dec, 2022",
        comment: "Ac felis donec ac odio pellentesque. Armet nisl suscipit adipiscing bibendum.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 4,
        name: "Annie Adamson",
        date: "8 Jan, 2023",
        comment:
          "Tartar condimentum lacinia quis vel eros donec ac odio tempor. Varkus ut amet mauris.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Edgar Johnson",
    date: "21 Dec, 2022",
    comment:
      "Vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis nunc sed id semper.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    replies: [],
  },
];

const Comment = ({ comment, isReply = false }) => {
  return (
    <div className={`p-4 border rounded-lg my-6  ${isReply ? "ml-0" : ""}`}>
      <div className="flex items-center md:px-0 gap-3">
        <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="font-semibold">{comment.name}</h4>
          <span className="text-gray-500 text-sm">{comment.date}</span>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{comment.comment}</p>
      <button className="text-orange-500 mt-2 flex items-center gap-1 text-sm">
        <FaReply /> Reply
      </button>
    </div>
  );
};

const CommentSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:px-10  " >
      <h2 className="text-4xl font-bold mb-4  " data-aos="flip-left">9 Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} >
          <Comment comment={comment} />
          {comment.replies.length > 0 && (
            <>
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} isReply />
              ))}
              <button className="text-orange-500 mt-2 flex items-center gap-1 text-sm">
                <IoIosArrowUp /> Hide
              </button>
            </>
          )}
        </div>
      ))}

      <button className="mt-4 border mx-auto max-w-5xl   border-orange-500 text-orange-500 px-4 py-2 rounded-lg flex items-center gap-1">
        See all comments <IoIosArrowDown />
      </button>

      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold">Leave your comment</h3>
        <textarea className="w-full p-2 border max-h-30 min-h-30 mt-2 rounded-lg" placeholder="Enter your comment"></textarea>
        <div className="flex gap-2 my-6">
          <input className="w-1/2 p-2 border rounded-lg" placeholder="Your Name" />
          <input className="w-1/2 p-2 border rounded-lg" placeholder="Email Address" />
        </div>
        <button className="w-full bg-orange-500 text-white py-2 mt-2 rounded-lg">Publish a comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
