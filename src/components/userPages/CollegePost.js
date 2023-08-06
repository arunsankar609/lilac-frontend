import React, { useState } from "react";
import { notification } from "../constants/notifications";
import { Link } from "react-router-dom";
const CollegePost = () => {
  const [comment, setComment] = useState("");
  const [newReply, setNewReply] = useState({ name: "", message: "" });
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const commentsData1 = [
    {
      _id: 1,
      name: "John Doe",
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      comment: "This is a great art piece!",
      replies: [
        {
          _id: 101,
          name: "Jane Smith",
          profilePic:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          message: "I agree, it's fantastic!",
        },
        {
          _id: 102,
          name: "Alex Johnson",
          profilePic:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          message: "Absolutely stunning!",
        },
      ],
    },
    {
      _id: 2,
      name: "Alice Cooper",
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      comment: "Love the colors used in this artwork.",
      replies: [
        {
          _id: 201,
          name: "Eve Adams",
          profilePic:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          message: "Yes, the colors are so vibrant!",
        },
      ],
    },
  ];
  const [showReplies, setShowReplies] = useState({});

  const toggleRepliesVisibility = (commentId) => {
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [commentId]: !prevShowReplies[commentId],
    }));
  };
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReply((prevNewReply) => ({
      ...prevNewReply,
      [name]: value,
    }));
  };
  const [commentsData, setCommentsData] = useState(commentsData1);
  const handleSubmitReply = (event, commentId) => {
    event.preventDefault();
    const commentIndex = commentsData.findIndex(
      (comment) => comment._id === commentId
    );

    if (commentIndex !== -1) {
      const updatedComment = { ...commentsData[commentIndex] };

      const newReplyObj = {
        _id: Date.now(),
        name: "Arun Sankar",
        profilePic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        message: newReply.message,
      };

      updatedComment.replies.push(newReplyObj);

      const updatedCommentsData = [...commentsData];
      updatedCommentsData[commentIndex] = updatedComment;

      setCommentsData(updatedCommentsData);
    }

    setNewReply({ name: "", message: "" });
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    const newCommentObj = {
      _id: Date.now(),
      name: "Arun Sankar",
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      comment: comment,
      replies: [],
    };

    setCommentsData((prevCommentsData) => [newCommentObj, ...prevCommentsData]);

    setNewComment({ name: "", comment: "" });
    setComment("");
  };
  let count = notification.length;
  return (
    <div className="flex justify-center items-center min-h-full mt-6">
      <div className="m-2 p-2 w-8/12 border border-gray-500">
        <div className="flex justify-between">
          <Link to="/">
            {" "}
            <div className="flex">
              <img
                className="w-16"
                src="https://png.pngtree.com/png-vector/20211120/ourmid/pngtree-university-logo-png-image_4037518.png"
                alt="University Logo"
              />
              <div>
                <h1>University of Greenwich</h1>
                <h1>3 days ago</h1>
              </div>
            </div>
          </Link>
          <Link to="/notification">
            {" "}
            <div>
              <div className="relative m-3">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </svg>
                {count > 0 && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {count}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
        <div>
          <p>
            Dear Students!,
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <img
            className="w-full mt-2"
            src="https://www.czechuniversities.com/uploads/2020/08/czech_University_Students.jpg"
            alt="University Students"
          />
        </div>
        <div className="bg-gray-300 w-48 rounded-2xl">
          <p className="m-2">7 Comments * 2 Replies</p>
        </div>
        <div>
          <textarea
            className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-2"
            onClick={handleSubmitComment}
            disabled={!comment.trim()}
          >
            Post
          </button>
        </div>
        <div>
          <h1 className="text-sm mb-4">view 5 more comments</h1>
          {commentsData.map((comment) => (
            <div
              key={comment._id}
              className="border border-gray-300 p-4 mb-4 rounded-md"
            >
              <div className="flex items-center mb-2">
                <img
                  src={comment.profilePic}
                  alt={`${comment.name}'s profile`}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <h2 className="text-xl font-semibold">{comment.name}</h2>
              </div>
              <p className="mb-4">{comment.comment}</p>
              <button
                className="text-blue-500"
                onClick={() => toggleRepliesVisibility(comment._id)}
              >
                {showReplies[comment._id] ? "Hide Replies" : "View Replies"}
              </button>
              {showReplies[comment._id] && (
                <div>
                  {comment.replies.map((reply) => (
                    <div
                      key={reply._id}
                      className="border border-gray-300 p-2 mb-2 rounded-md ml-4"
                    >
                      <div className="flex items-center mb-2">
                        <img
                          src={reply.profilePic}
                          alt={`${reply.name}'s profile`}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <h3 className="text-lg font-semibold">{reply.name}</h3>
                      </div>
                      <p>{reply.message}</p>
                    </div>
                  ))}
                  <form
                    onSubmit={(event) => handleSubmitReply(event, comment._id)}
                  >
                    <input
                      type="text"
                      name="message"
                      value={newReply.message}
                      onChange={handleInputChange}
                      placeholder="Your Reply"
                      className="border border-gray-300 p-2 rounded-md mr-2 w-96 mx-4"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Reply
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegePost;
