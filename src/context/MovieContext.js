import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const movieId = queryParams.get("movie_id");
  const base_url = "https://image.tmdb.org/t/p/original";
  const apiKEY= "2fad590bc404e4e882a683070f03d08b";

  const [movies, setMovies] = useState(null);
  const [movieApi, setMovieApi] = useState();

  const getMovies = async() => {
    const request = await axios.get(`api/v1/movies/`);
    setMovies(request.data.data);
  }

  const deleteMovie = async (id) =>{
    await axios.delete("/api/v1/movies/"+id);
    getMovies();
  }
  
  const getMovieApi = async (id) =>{
    const movieGet = await axios.get(`https://api.themoviedb.org/3/movie/11??api_key=${apiKEY}`);
    setMovieApi(movieGet);
  }
   
  return <MovieContext.Provider value={{movies, getMovies, deleteMovie, movieApi, getMovieApi}}>{children}</MovieContext.Provider>
};

export default MovieContext;