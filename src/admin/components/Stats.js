import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "../../axios.js";

export default function Stats() {
  const [stats, setStats] = useState([]);

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

  console.log(stats);
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
          <h1>1</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Users</h3>
          </div>
          <h1>1</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Movies Watched</h3>
          </div>
          <h1>1</h1>
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
                data: [200, 78, 38, 87, 76],
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
                categories: ["Action", "Comedy", "Horror", "Fantasy", "Drama"],
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

        <div class="charts-card">
          <h2 class="chart-title">Users logged in</h2>
          <div id="area-chart"></div>
          <Chart
            type="donut"
            height={350}
            series={[45, 67, 89, 34, 43]}
            options={{
              labels: ["USA", "China", "Russia", "India", "UK"],
              legend: {
                labels: {
                  colors: ["#FFFFFF"],
                },
              },
              plotOptions: {
                pie: {
                  donut: {
                    labels: { show: false, fontSize: 30, color: "#FFFFFF" },
                  },
                },
              },

              dataLabels: {
                enabled: true,
                colors: "#FFFFFF",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
