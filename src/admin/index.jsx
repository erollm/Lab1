import React from "react";
import Navbar from "./navbar";
import Stats from "./components/Stats";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import EditMovie from "./components/EditMovie"
import "./css/style.css";
import "./css/admin.css";
import Movie from "../assets/icons/movie.png";

function index() {
  return (
    <div className="admin--panel">
      <Navbar />
      <Stats/>
    </div>
  );
}

export default index;
