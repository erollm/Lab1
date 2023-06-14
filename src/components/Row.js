import axios from "../axios.js";
import React, { useEffect, useState } from "react";
import "../assets/css/Row.css";
import vector from "../assets/images/Vector.png";

function Row({ title, fetchUrl, large = false }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  useEffect(() => {
    async function fetchData() {
      console.log(await csrf());
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      return;
    }
    fetchData();
  }, [title, fetchUrl]);
  if (!Array.isArray(movie)) {
    // Handle non-array response (error or unexpected data)
    return <div>Error: Failed to fetch movies.</div>;
  }

  return (
    <div className="row">
      <div className="tittle_row">
        <a href={`/Categories?genre=${title}`}>
          <h2>{title}</h2>
          <img src={`${vector}`} alt="Vector" />
        </a>
      </div>
      <div className="row_posters">
        {movie.map((movie) => (
          <a href={`/MoviePage?movie_id=${movie.id}`}>
            <img
              className={`row_poster ${large && "row_poster_large"}`}
              key={movie.id}
              src={`${base_url}${
                large ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Row;
