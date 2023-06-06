import { useState, useEffect } from "react";
import axios from "../axios.js";

import demonSlayer from "../assets/images/covers/demonslayer.webp";
import dragonBall from "../assets/images/covers/dragonballbroly.jpg";
import naruto from "../assets/images/covers/naruto.webp";
import onePiece from "../assets/images/covers/onepiecefilmred.webp";
import silentVoice from "../assets/images/covers/silentvoice.jpg";
import spiritedAway from "../assets/images/covers/spiritedaway.jpg";
import totoro from "../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../assets/images/covers/yourname.jpg";

function SearchPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`api/search/${query}`);
      setMovie(request.data);
      return;
    }
    fetchData();
  });

  console.log(movie);

  return (
    <div className="searchPage container">
      <div className="searchPageContainer">
        <div className="searchPageTitle">
          <h2>{query ? `Results for : ${query} ` : null}</h2>
        </div>
        <div className="searchPageResults">
          {movie.map((movie) => (
            <a href={`/MoviePage?movie_id=${movie.id}`}>
              <img
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
