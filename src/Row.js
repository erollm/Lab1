import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, large = false }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie.map((movie) => (
          <img
            className={`row_poster ${large && "row_poster_large"}`}
            key={movie.id}
            src={`${base_url}${
              large ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
