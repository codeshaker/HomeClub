import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Home Club</h1>
      <p>Hire a cook or maid without any hassle</p>
      <Link to="users" className="btn btn-primary btn-lg">
        Know More
      </Link>
    </div>
  );
};

export default HomePage;
