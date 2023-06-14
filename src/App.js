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
import Admin from "./admin/index.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={[<Navbar />, <HomeScreen />]} />
        <Route path="/HomeScreen" element={[<Navbar />, <HomeScreen />]} />
        <Route path="/SearchPage" element={[<Navbar />, <SearchPage />]} />
        <Route path="/MyLibrary" element={[<Navbar />, <MyLibrary />]} />
        <Route path="/WatchLater" element={[<Navbar />, <WatchLater />]} />
        <Route path="/MoviePage" element={[<Navbar />, <MoviePage />]} />
        <Route path="/Categories" element={[<Navbar />, <Categories />]} />
        <Route path="/Profile" element={[<Navbar />, <Profile />]} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </>
  );
}
export default App;
