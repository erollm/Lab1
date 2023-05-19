import React from "react";
import Navbar from "./navbar";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import "../assets/css/admin.css";
import Movie from "../assets/icons/movie.png";
import Chart from "react-apexcharts";

function index() {
  return (
    <div className="admin--panel">
          <Navbar />
          <Users />
    </div>
  );
}

export default index;
