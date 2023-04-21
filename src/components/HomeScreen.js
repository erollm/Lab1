import React from "react";
import "../assets/css/HomeScreen.css";
import Banner from "./Banner.js";
import Row from "./Row";
import request from "../request.js";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      <Banner />
      <Row title="Trending" fetchUrl={request.fetchTrending} large={true} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}