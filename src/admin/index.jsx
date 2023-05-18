import React from "react";
import Navbar from "./navbar";
import "../assets/css/admin.css";
import Movie from "../assets/icons/movie.png";
import Users from "../assets/icons/users.png";

function index() {
  return (
    <div className="admin--panel">
      <Navbar />

      <main class="main-container">
        <div class="main-title">
          <h2>Admin Dashboard</h2>
        </div>

        <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <h3>Movies</h3>
            </div>
            <h1>249</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>Users</h3>
            </div>
            <h1>25</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h3>Movies Watched</h3>
            </div>
            <h1>1500</h1>
          </div>
        </div>

        <div class="charts">
          <div class="charts-card">
            <h2 class="chart-title">Top 5 Movies</h2>
            <div id="bar-chart"></div>
          </div>

          <div class="charts-card">
            <h2 class="chart-title">Users logged in</h2>
            <div id="area-chart"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
