import React, { useState } from "react";
import { notification } from "../constants/notifications";
import { Link } from "react-router-dom";

const NotificationPage = () => {
  const [notificationData, setNotificationData] = useState(notification);

  return (
    <div className="flex justify-center items-center h-[100vh] mt-6">
      <div className="m-2 p-2 w-8/12 rounded-md h-[100vh]">
        <h1 className="text-blue-800 border border-blue-600 w-fit my-4 rounded-2xl">
          <Link to="/">
            <span className="m-2">Home</span>
          </Link>
          /
          <Link to="/post">
            <span className="m-2">college Post</span>
          </Link>
        </h1>
        {notificationData?.map((item, index) => (
          <div
            key={index}
            className={`flex ${!item.viewed ? " bg-slate-300" : ""}`}
          >
            <img
              className="w-10 rounded-2xl m-3"
              src={item.profilePic}
              alt="User Avatar"
            />
            <div className="mx-2 m-3">
              <h1 className="">
                <span className="font-semibold text-lg">{item.name}</span>{" "}
                {item.message}
              </h1>
              <h1 className="text-gray-500">{item.time}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
