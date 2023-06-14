import React from "react";
import "../assets/css/style.css";
import Banner from "./Banner.js";
import Row from "./Row";
import request from "../request.js";

export default function HomeScreen() {
  const timer = setTimeout(() => {}, 50);
  clearTimeout(timer);

  return (
    <div className="homeScreen">
      <Banner />
      <Row title="Trending" fetchUrl={request.fetchHorrorMovies} large={true} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
