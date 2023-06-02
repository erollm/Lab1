import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function AddMovie() {
    return (
        <div className="adminContainer">
            <div className="SContainer">
                <h2>Add New Movie</h2>
                <div className="AddUser">
                    <label>Title</label>
                    <input type="text"></input>
                    <label>Description</label>
                    <textarea rows="5"></textarea>
                    <label>Trailer Url</label>
                    <input type="text"></input>
                    <label>IMDB</label>
                    <input type="text"></input>
                    <label>Genre</label>
                    <select>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                    <span>
                    <label htmlFor="file-upload" className="custom-file-upload">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload Movie
                    </label>
      <input id="file-upload" type="file" />
                    <label htmlFor="file-upload" className="custom-file-upload">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload Cover
                    </label>
                    <input id="file-upload" type="file" />
                    </span>
                    <button className="btn btn-primary addB">Add</button>
                </div>
            </div>
        </div>
    )
}
