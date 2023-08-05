import React from "react";

const NotificationPage = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-6">
      <div className="m-2 p-2 w-8/12 border border-gray-500 rounded-md h-full">
        <div className="flex  bg-slate-300">
          <img className="w-10 rounded-2xl m-3" src="https://img.freepik.com/premium-vector/flat-style-vector-icons-set-modern-beautiful-avatar-man-real-people-portraits-hand-drawn-flat-style-vector-design-concept-illustration-men-male-faces-shoulders-avatars_419010-13.jpg?w=360" />
          <div className="mx-2 m-3">
            <h1 className=""><span className="font-semibold text-lg">Name</span> has commented on your post</h1>
            <h1 className="text-gray-500">Now</h1>
          </div>
        </div>
     
        
      </div>
    </div>
  );
};

export default NotificationPage;
