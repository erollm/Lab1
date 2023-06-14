import React, { useState, useEffect } from "react";
import "../assets/css/SearchPage.css";
import axios from "../axios.js";
import request from "../request.js";
import useAuthContext from "../context/AuthContext.js";

function WatchLater() {
  // state and effect declaration
  const { user, logout } = useAuthContext();
  const [movie, setMovie] = useState(null);
  // url of photos in API
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // using timeout to make sure api call doesnt get called before useauthcontext
    const timer = setTimeout(() => {
      async function fetchData() {
        const request = await axios.get(`api/watch_later/${user.id}`);
        setMovie(request.data);
        return;
      }
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);

    // passing user inside useEffect
  }, [user]);

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
