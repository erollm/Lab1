import Popup from 'reactjs-popup';
import {ReactComponent as BookmarkIcon} from "../assets/icons/bookmark.svg";
import React, {useEffect, useState} from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../axios";

const Profile = () => {
  // const [toggleState, setToggleState] = useState(1);
  //
  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };

    const { user, logout } = useAuthContext();
    const [movie, setMovie] = useState(null);
    // url of photos in API
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        // using timeout to make sure api call doesnt get called before useauthcontext
        const timer = setTimeout(() => {
            async function fetchData() {
                const request = await axios.get(`api/watched_status/${user.id}`);
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

console.log(user);
  return (
    <div className="profile container ">
      <div className="profileContainer row">
        <div className="profilePersonalInfo col-lg-4">
          <div className="profilePersonalInfoImg">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="profilePersonalInfoName">
            <h2>{user.firstname + " " + user.lastname}</h2>
            <h3>@{user.username}</h3>
          </div>
        </div>
        <div className="profileActivities col-lg-8">
          <div className="bloc-tabs">
            <h1>Watched</h1>
          </div>
          <div className="content-tabs">
              <div className="profileWatchedMovies">
                  {movie.map((movie) => (
                      <a href={`/MoviePage?movie_id=${movie.id}`}>
                      <img
                          src={`${base_url}${movie.poster_path}`}
                          alt={movie.name}
                      />
                      </a>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
