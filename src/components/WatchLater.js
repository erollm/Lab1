import React, { useState, useEffect } from "react";
import "../assets/css/SearchPage.css";
import axios from "../axios.js";
import request from "../request.js";

function WatchLater() {
  // state and effect declaration

  const [movie, setMovie] = useState(null);

  // url of photos in API
  const base_url = "https://image.tmdb.org/t/p/original";
  const fetchUrl = request.fetchTrending;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return;
    }
    fetchData();
  }, []);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="search_page">
        <h2 className="search_page_title">WATCH LATER</h2>

        <div className="search_page_movies">
          <div className="row_posters_search_container">
            {movie.map((movie) => (
              <img
                className={`row_posters_search_item row_poster_large`}
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default WatchLater;
