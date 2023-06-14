import React from "react";
import Navbar from "./navbar";
import Stats from "./components/Stats";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import EditMovie from "./components/EditMovie";
import "./css/style.css";
import "./css/admin.css";
import Movie from "../assets/icons/movie.png";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import { MovieProvider } from "../context/MovieContext";

export default function index() {
  return (
    <div className="admin--panel">
      <Navbar />
      <MovieProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Stats />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddUsers />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/:id/edit" element={<EditMovie />} />
          </Routes>
        </UserProvider>
      </MovieProvider>
    </div>
  );
}
