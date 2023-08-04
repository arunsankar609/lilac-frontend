import React, { useState } from "react";

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
    // Find the corresponding comment
    const commentIndex = commentsData.findIndex(
      (comment) => comment._id === commentId
    );

    if (commentIndex !== -1) {
      // Clone the comment and its replies to avoid mutating the original data
      const updatedComment = { ...commentsData[commentIndex] };

      // Create the new reply object
      const newReplyObj = {
        _id: Date.now(), // A simple way to generate a unique ID (not ideal for production)
        name: "Arun Sankar",
        profilePic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        message: newReply.message,
      };

      // Push the new reply to the cloned comment's replies array
      updatedComment.replies.push(newReplyObj);

      // Create a new array with the updated comment and update the state
      const updatedCommentsData = [...commentsData];
      updatedCommentsData[commentIndex] = updatedComment;

      // Update the state with the new data
      setCommentsData(updatedCommentsData);
    }

    // Clear the reply fields after submitting
    setNewReply({ name: "", message: "" });
  };

  
  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Create the new comment object
    const newCommentObj = {
      _id: Date.now(), // A simple way to generate a unique ID (not ideal for production)
      name: "Arun Sankar",
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      comment: comment,
      replies: [], // Initialize an empty array for the replies of the new comment
    };

    // Update the state with the new comment added to the commentsData
    setCommentsData((prevCommentsData) => [newCommentObj, ...prevCommentsData]);

    // Clear the comment fields after submitting
    setNewComment({ name: "", comment: "" });
    setComment("")
  };
  return (
    <div className="flex justify-center items-center min-h-full mt-6">
      <div className="m-2 p-2 w-8/12 border border-gray-500">
        <div className="flex">
          <img
            className="w-16"
            src="https://png.pngtree.com/png-vector/20211120/ourmid/pngtree-university-logo-png-image_4037518.png"
            alt="University Logo"
          />
          <div className="">
            <h1>University of Greenwich</h1>
            <h1>3 days ago</h1>
          </div>
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
            disabled={!comment.trim()} // Disable the button if the comment is empty
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
