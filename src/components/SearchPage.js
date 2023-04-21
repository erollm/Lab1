import React, { useState, useEffect } from "react";
import "../assets/css/SearchPage.css";
import { useLocation } from "react-router-dom";
import axios from "../axios.js";

function SearchPage() {
  //Getting query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="search_page">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={search}
      />
      <h2 className="search_page_title">Results for : {genre}</h2>
    </div>
  );
}
export default SearchPage;
