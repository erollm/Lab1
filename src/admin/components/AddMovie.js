import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import MovieContext from "../../context/MovieContext";


export default function AddMovie() {
    const {formValues, storeMovie, getMovieApi } = useContext(MovieContext);
    const [movieId, setMovieId] = React.useState("");

    function vale(){
       getMovieApi(movieId);
    }
    return (
        <div className="adminContainer">
            <div className="SContainer">
                <h2>Add New Movie</h2>
                <form className="AddUser" onSubmit={storeMovie}>
                    <label>Title</label>
                    <input disabled type="text" value={formValues.title}></input>
                    <label>Description</label>
                    <textarea disabled rows="5" value={formValues.description}></textarea>
                    <label>TheMovieDB ID:</label>
                    <input onBlur={vale} onChange={(e)=> setMovieId(e.target.value)}type="text"></input>
                    <button className="btn btn-primary addB">Add</button>
                </form>
            </div>
        </div>
    )
}
