import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "../../axios.js";

export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/AdminStats");
        setStats(response.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
    fetchData();
  }, []);

  if (stats == null) {
    return <div> loading </div>;
  }
  /*
  {
    1: [Action, 1],
    2: [Comedy, 2]
  }

  */
  const genres = [];
  const genreValues = [];

  for (const key in stats.data.genres) {
    genres.push(stats.data.genres[key][0]);
    genreValues.push(stats.data.genres[key][1]);
  }

  return (
    <div className="main-container">
      <div class="main-title">
        <h2>Admin Dashboard</h2>
      </div>
      <div class="main-cards">
        <div class="card">
          <div class="card-inner">
            <h3>Movies</h3>
          </div>
          <h1>{stats.data.movieCount}</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Users</h3>
          </div>
          <h1>{stats.data.userCount}</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Movies Watched</h3>
          </div>
          <h1>{stats.data.moviesWatched}</h1>
        </div>
      </div>

      <div class="charts">
        <div class="charts-card">
          <h2 class="chart-title">Top 5 Genres</h2>
          <div id="bar-chart"></div>
          <Chart
            type="bar"
            height={350}
            series={[
              {
                data: genreValues,
              },
            ]}
            options={{
              title: {
                text: "BEST GENRE",
                style: {
                  color: "#FFFFFF",
                },
              },
              chart: {
                stacked: true,
              },
              xaxis: {
                categories: genres,
                labels: {
                  style: {
                    colors: [
                      "#FFFFFF",
                      "#FFFFFF",
                      "#FFFFFF",
                      "#FFFFFF",
                      "#FFFFFF",
                    ],
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#FFFFFF",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
