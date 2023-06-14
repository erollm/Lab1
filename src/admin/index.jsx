import React from 'react';
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
import { Routes,Route } from 'react-router-dom';
import {UserProvider} from '../context/UserContext';


export default function index(){
  return (
    <div className="admin--panel">
      <Navbar />
      <UserProvider>
      <Routes>
          <Route path="/admin" element={<Stats/>}/>
          <Route path="/admin/users" element={<Users/>}/>
          <Route path="/admin/users/add" element ={<AddUsers/>}/>
          <Route path="/admin/movies" element={<Movies/>}/>
      </Routes>
      </UserProvider>
    </div>
  );
}

