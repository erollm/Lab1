import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios.js";
import requests from "../request.js";
import "../assets/css/style.css";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  // PERDORIMI I EFFECT PER TE BERE API CALL ME LIBRARIN AXIOS
  useEffect(() => {
    // DUKE BERE FETCH DATA
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      // NDRYSHIMI I STATE TE HOME PAGE
      // ME FILM RANDOM TE MARRUR NGA API CALL

      setMovie(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  //   KTHIMI I JSX
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title}</h1>
        <div className="banner_buttons">
          <a href="/">
            <button className="banner_button play_button">Play</button>
          </a>
          <a href={`/MoviePage?movie_id=${movie?.id}`}>
            <button className="banner_button info_button">More Info</button>
          </a>
        </div>
      </div>
      <div className="banner_Fade"></div>
    </header>
  );
}
