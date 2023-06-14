import axios from "../axios.js";
import React, { useEffect, useState } from "react";
import "../assets/css/Row.css";
import vector from "../assets/images/Vector.png";

function CategoryMovies({ title, fetchUrl, large = false }) {
    const [movie, setMovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data);
            return;
        }
        fetchData();
    }, [title, fetchUrl]);
    if (!Array.isArray(movie)) {
        // Handle non-array response (error or unexpected data)
        return <div>Error: Failed to fetch movies.</div>;
    }

    return (
        <div>
            {movie.map((movie) => (
                <a href={`/MoviePage?movie_id=${movie.id}`}>
                    <img
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                </a>
            ))}
        </div>
    );
}

export default CategoryMovies;
