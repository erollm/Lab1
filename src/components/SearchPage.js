import React, { useState, useEffect } from "react";
import "../assets/css/SearchPage.css";
import { useLocation } from "react-router-dom";
import axios from "../axios.js";
import request from "../request";

function SearchPage() {
  // state and effect declaration
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  //Getting query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  // url of photos in API
  const base_url = "https://image.tmdb.org/t/p/original";

  // Api call for later use
  async function fetchData(fetchUrl) {
    const response = await axios.get(fetchUrl);
    setMovie(response.data.results);
    return;
  }

  //Using map to delcare key-value pair
  const genreMap = new Map([
    ["trending", request.fetchTrending],
    ["Trending", request.fetchTrending],
    ["comedy", request.fetchComedyMovies],
    ["Comedy", request.fetchComedyMovies],
    ["Action", request.fetchActionMovies],
    ["action", request.fetchActionMovies],
    ["horror", request.fetchHorrorMovies],
    ["Horror", request.fetchHorrorMovies],
    ["documentaries", request.fetchDocumentaries],
    ["Documentaries", request.fetchDocumentaries],
  ]);

  // conditional rendering
  useEffect(() => {
    const searchTerm = (genre || search || "").toLowerCase();
    const fetchUrl = genreMap.get(searchTerm);

    if (fetchUrl) {
      fetchData(fetchUrl);
    }
  }, [search]);

  // Fully functional search input and saving value onchange
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <p style={{ color: "white" }}>THIS IS A TEMPORARY INPUT</p>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={search}
      />

      <div className="search_page">
        {search ? (
          <h2 className="search_page_title">
            Results for : {search ? search : genre}
          </h2>
        ) : (
          <h2 className="search_page_title">SEARCH A MOVIE</h2>
        )}

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
export default SearchPage;
