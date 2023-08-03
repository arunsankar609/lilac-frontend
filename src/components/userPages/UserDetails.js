import React, { useEffect } from "react";
import Cards from "../reusables/Cards";
import axios from "axios";

const UserDetails = () => {
    const getData = async () => {
        await axios.get("http://localhost:8080/api/v1/users/users")
          .then((data) => {
            console.log("data", data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
    
      // Use the useEffect hook with an empty dependency array to run getData only once on component mount
      useEffect(() => {
        getData();
      }, []);
    
  return (
    <div className="flex m-3 p-3 justify-center">
      <Cards
        title="Card 2"
        description="This is the second card component."
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
      <Cards
        title="Card 2"
        description="This is the second card component."
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
      <Cards
        title="Card 2"
        description="This is the second card component."
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
    </div>
  );
};

export default UserDetails;
