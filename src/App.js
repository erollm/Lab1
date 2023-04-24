import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen.js";
import SearchPage from "./components/SearchPage.js";
import WatchLater from "./components/WatchLater";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </>
  );
}

export default App;
