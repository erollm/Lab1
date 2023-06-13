import onepeiecename from "../assets/images/covers/onepiecefilmredname.png";
import { ReactComponent as PlayButton } from "../assets/icons/play_button.svg";
import { ReactComponent as AddLibrary } from "../assets/icons/add_to_library.svg";
import { ReactComponent as Add } from "../assets/icons/add.svg";
import { ReactComponent as Imdb } from "../assets/icons/imdb_logo.svg";
import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import useAuthContext from "../context/AuthContext.js";
import video from "../assets/videos/video.mp4";

function MoviePage() {
  const queryParams = new URLSearchParams(window.location.search);
  const movieId = queryParams.get("movie_id");
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState(null);
  const [watchlistRow, setWatchlistRow] = useState(null);
  const { user, logout } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`api/v1/movies/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchWatchlistRow() {
      //                       watchlist/movie_id/User_id
      const request = await axios.get(`api/watchlist/2/1`);
      setWatchlistRow(request.data);
      return;
    }
    fetchWatchlistRow();
  }, []);

  function apiCall(userData) {
    if (watchlistRow) {
      async function putData() {
        const request = await axios.put(`/api/watchlist/put`, userData);
        console.log("exec watched put");
      }
      putData();
    } else {
      async function postData() {
        const request = await axios.post(`/api/watchlist`, userData);
        console.log("exec watched");
      }
      postData();
    }
  }
  // === VIDEO ===
  const endVideo = () => {
    if (movie !== null) {
      const userData = {
        user_id: user.id,
        movie_id: movieId,
        watched_status: true,
      };
      console.log(userData);
      apiCall(userData);
    }
  };

  //  ==== WATCHLIST ====
  const addWatchlist = () => {
    if (movie !== null) {
      const userData = {
        user_id: user.id,
        movie_id: movieId,
        watch_later: true,
      };

      apiCall(userData);
      console.log("watchlate called");
    }
  };

  // === BOOKMARK ===
  const addBookmark = () => {
    if (movie !== null) {
      const userData = {
        user_id: user.id,
        movie_id: movieId,
        bookmarked: true,
      };

      apiCall(userData);
      console.log("bookmark called");
    }
  };

  if (movie === null) {
    return <div>Loading...</div>;
  }

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
              <button onClick={addBookmark}>
                <Add className="MoviePagePlayButton" />
                Add to Library
              </button>
              <button onClick={addWatchlist}>
                <AddLibrary className="MoviePagePlayButton" />
                Add to Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <video width="100%" height="100%" controls onEnded={endVideo}>
          <source src={video} />
        </video>
      </div>
    </div>
  );
}

export default MoviePage;
