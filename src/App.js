import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.js";
import SearchPage from "./components/SearchPage.js";
import WatchLater from "./components/WatchLater";
import Navbar from "./Navbar";
import Profile from "./components/Profile";
import MoviePage from "./components/MoviePage";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyLibrary from "./components/MyLibrary";


function App() {
  // return (
  //   <>
  //     <Routes>
  //
  //       <Route path="/" element={<HomeScreen />} />
  //       <Route path="/search" element={<SearchPage />} />
  //       <Route path="/watch-later" element={<WatchLater />} />
  //     </Routes>
  //   </>
  // );
    let Component

    switch (window.location.pathname) {
        case "/":
            Component = <HomeScreen />
            break
        case "/HomeScreen":
            Component = <HomeScreen />
            break
        case "/SearchPage":
            Component = <SearchPage />
            break
        case "/WatchLater":
            Component = <WatchLater />
            break
        case "/MoviePage":
            Component = <MoviePage />
            break
        case "/Categories":
            Component = <Categories />
            break
        case "/Profile":
            Component = <Profile />
            break
        case "/Login":
            Component = <Login />
            break
        case "/Signup":
            Component = <Signup />
            break
        case "/MyLibrary":
            Component = <MyLibrary />
            break
        // case "/Login":
        //     Component = <Login />
        //     break
        // case "/Signup":
        //     Component = <Signup />
        //     break
    }
    return (
        <>
            <Navbar />
            {Component}
        </>
    )
}

export default App;
