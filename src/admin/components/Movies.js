import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import totoro from "../../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../../assets/images/covers/yourname.jpg";
import MovieContext from '../../context/MovieContext';
import MTableRow from './MTableRow';

export default function Movies() {
    const { movies, getMovies } = useContext(MovieContext);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchMovies = async () => {
        await getMovies();
        setLoading(false);
      };
  
      fetchMovies();
    }, []);
  
    if (loading) {
      return <p>Loading movies...</p>;
    }
    console.log(movies)
  
    return (
      <div className="adminContainer">
        <div className="SContainer">
          <h2>Movies</h2>
          <Link to="/admin/movies/add" className="btn btn-outline-primary addB">
            Add New Movie
          </Link>
          <table className="table table-hover table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Cover</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <td scope="col">Created At</td>
                <th score="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <MTableRow key={movie.id} img={movie.poster_path} title={movie.title} desc={movie.description} createdat={movie.created_at}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }