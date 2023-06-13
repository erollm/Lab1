import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import Logo from "../assets/images/cvlogo.png";
import Stats from "../assets/icons/stats.png";
import Movie from "../assets/icons/movie.png";
import Users from "../assets/icons/users.png";

function navbar() {
  return (
    <>
      <div className="admin--navbar">
        <div>
          <img src={Logo} className="logo--navbar"></img>
        </div>
        <div className="admin--lists">
          <ul>
            <li>
              <span>
                <Link to="/admin">
                  <img src={Stats} class="admin--stats--icon"></img>
                  Stats
                </Link>
              </span>
              <hr></hr>
            </li>
            <li>
              <span>
                <Link to="/admin/users">
                  <img src={Users} class="admin--users--icon"></img>Users
                </Link>
              </span>
              <hr></hr>
            </li>
            <li>
              <span>
                <Link to="/admin/movies">
                  <img src={Movie} class="admin--movie--icon"></img>Movies
                </Link>
              </span>
              <hr></hr>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default navbar;
