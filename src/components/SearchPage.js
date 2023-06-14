import { useState, useEffect } from "react";
import axios from "../axios.js";

function SearchPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`api/search/${query}`);

      setMovie(request.data);
      return;
    }
    fetchData();
  }, []);

  if (movie === null) {
    return <div>Loading...</div>;
  }

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