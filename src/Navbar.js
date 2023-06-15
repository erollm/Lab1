import React from "react";
import Logo from "./assets/images/cvlogo.png";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { ReactComponent as BookmarkIcon } from "./assets/icons/bookmark.svg";
import { ReactComponent as WatchLaterIcon } from "./assets/icons/clock.svg";
import { ReactComponent as UserIcon } from "./assets/icons/user.svg";
import useAuthContext from "./context/AuthContext";
import { Link } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  function submitSearch(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      window.location.href = `/SearchPage?query=${event.target.value}`;
    }
  }
  const { user, logout } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 left-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/HomeScreen">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          style={{ background: "white" }}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                aria-current="page"
                to="/Categories"
              >
                Categories
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0" id="navbarListIcon">
            <li className="nav-item">
              <div className="navbarSearchInput">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  autoFocus
                  onKeyDown={submitSearch}
                />
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/MyLibrary"
              >
                <BookmarkIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/WatchLater"
              >
                <WatchLaterIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active "
                aria-current="page"
                to="/Profile"
              >
                <UserIcon />
              </Link>
            </li>
            {user && (
              <li className="nav-item d-flex align-items-center me-2">
               <FontAwesomeIcon onClick={logout} role='button' icon={faArrowRightFromBracket}/>
              </li>
            )}
            {user && user.role === "admin" && (
              <li className="nav-item d-flex align-items-center">
                <Link to="/admin"><FontAwesomeIcon icon={faToolbox} /></Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
