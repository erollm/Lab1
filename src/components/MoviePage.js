import onepeiecename from "../assets/images/covers/onepiecefilmredname.png";
import { ReactComponent as PlayButton } from "../assets/icons/play_button.svg";
import { ReactComponent as AddLibrary } from "../assets/icons/add_to_library.svg";
import { ReactComponent as Add } from "../assets/icons/add.svg";
import { ReactComponent as Imdb } from "../assets/icons/imdb_logo.svg";
import React, { useEffect, useState } from "react";
import axios from "../axios.js";

function MoviePage() {
  const queryParams = new URLSearchParams(window.location.search);
  const movie_id = queryParams.get("movie_id");
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`api/v1/movies/${movie_id}}`);
      setMovie(request.data);
      return;
    }
    fetchData();
  }, []);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  console.log(move.data);

  return (
    <div className="MoviePageBg">
      <div className="MoviePageBgShadow">
        <div className="MoviePage">
          <div className="MoviePageContainer">
            <img src={onepeiecename} alt="" />
            <ul className="MoviePageContainerInfo">
              <li>{movie.data.length}</li>
              <li>{movie.data.date}</li>
              <li>
                <Imdb className="MoviePageImdbSvg" /> 9.9
              </li>
            </ul>
            <ul className="MoviePageContainerCategories">
              <li>Anime</li>
              <li className="MoviePageContainerCategoriesDivider">|</li>
              <li>Adventure</li>
              <li className="MoviePageContainerCategoriesDivider">|</li>
              <li>Action</li>
            </ul>
            <p className="MoviePageDescription">{movie.data.description}.</p>
            <div className="MoviePageButtons">
              <button>
                <PlayButton className="MoviePagePlayButton" />
                Play
              </button>
              <button>
                <PlayButton className="MoviePagePlayButton" />
                Watch Trailer
              </button>
              <button>
                <Add className="MoviePagePlayButton" />
                Add to Library
              </button>
              <button>
                <AddLibrary className="MoviePagePlayButton" />
                Add to Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
