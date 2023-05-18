import React from "react";
import Navbar from "./navbar";
import "../assets/css/admin.css";

function index() {
  return (
    <div className="admin--panel">
      <Navbar />
      <div className="admin--main">
        <div className="admin--main--header">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="admin--main--stats">
          <p>MOVIES</p>
          <p>USERS</p>
          <p>MOVIES WATCHED</p>
          <p>MOVIE GENRES</p>
        </div>
        <hr></hr>
        <div className="admin--main--charts">
          <p>Users logins in days</p>
          <p>Movie watched in days</p>
        </div>
      </div>
    </div>
  );
}

export default index;
