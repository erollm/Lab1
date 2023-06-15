import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios.js";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const queryParams = new URLSearchParams(window.location.search);
  const movieId = queryParams.get("movie_id");
  const base_url = "https://image.tmdb.org/t/p/original";
  const apiKEY= "2fad590bc404e4e882a683070f03d08b";
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    backdrop_path:"",
    trending: true,
    poster_path: "",
    length: "",
    date: "",
    description: "",
    trailer: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [movies, setMovies] = useState(null);


  const getMovies = async() => {
    const request = await axios.get(`api/v1/movies/`);
    setMovies(request.data.data);
  }

  const deleteMovie = async (id) =>{
    await axios.delete("/api/v1/movies/"+id);
    getMovies();
  }
  
  const getMovieApi = async (id) =>{
    const movieGet = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKEY}`);
    setFormValues({
      title: movieGet.data.title,
      backdrop_path: movieGet.data.backdrop_path,
      trending: true,
      poster_path: movieGet.data.poster_path,
      length: movieGet.data.runtime,
      date: movieGet.data.release_date,
      description: movieGet.data.overview,
      trailer: ""
  })
}

const storeMovie = async (e) =>{
  e.preventDefault();
  try{
      await axios.post("/api/v1/movies", formValues);
      setFormValues(initialValues);
      navigate("/admin/movies");
}
  catch(e){
      console.log(e);
  }
}
  return <MovieContext.Provider value={{movies, getMovies, deleteMovie, storeMovie, getMovieApi, formValues}}>{children}</MovieContext.Provider>
};

export default MovieContext;