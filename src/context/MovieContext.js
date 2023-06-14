import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const movieId = queryParams.get("movie_id");
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState(null);

  const getMovies = async() => {
    const request = await axios.get(`api/v1/movies/`);
    setMovies(request.data.data);
  }

  const deleteMovie = async (id) =>{
    await axios.delete("/api/v1/movies/"+id);
    getMovies();
  }
  
   
  return <MovieContext.Provider value={{movies, getMovies, deleteMovie}}>{children}</MovieContext.Provider>
};

export default MovieContext;