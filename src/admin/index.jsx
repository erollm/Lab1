import React from "react";
import Navbar from "./navbar";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import "../assets/css/admin.css";
import Movie from "../assets/icons/movie.png";
import Chart from "react-apexcharts";

function index() {
  return (
    <div className="admin--panel">
          <Navbar />
          <Movies />
    </div>
  );
}

export default index;
