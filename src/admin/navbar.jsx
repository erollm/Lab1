import React from "react";
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
                <a href="/admin">
                  {" "}
                  <img src={Stats} class="admin--stats--icon"></img>
                  Stats
                </a>
              </span>
              <hr></hr>
            </li>
            <li>
              <span>
                <a href="/admin/users">
                  <img src={Users} class="admin--users--icon"></img>Users
                </a>
              </span>
              <hr></hr>
            </li>
            <li>
              <span>
                <a href="/admin/movies">
                  <img src={Movie} class="admin--movie--icon"></img>Movies
                </a>
              </span>
              <hr></hr>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default navbar;
