import React, { useEffect, useState } from "react";
import Cards from "../reusables/Cards";
import axios from "axios";
import { Outlet } from "react-router-dom";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const getData = async () => {
    await axios
      .get("http://localhost:8080/api/v1/users/users")
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex m-3 p-3 justify-center flex-wrap">
        {userData ? (
          userData.map((user) => (
            <Cards
              name={user.name}
              userId={user.userId}
              email={user.email}
              imageUrl={user.imageUrl}
              phone={user.phone}
              degree={user.degree}
              statusOfDoc={user.statusOfDoc}
              needToEdit={user.needToEdit}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default UserDetails;
