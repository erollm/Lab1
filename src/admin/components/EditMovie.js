import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import yourName from "../../assets/images/covers/yourname.jpg";

export default function EditMovie() {
    return (
        <div className="adminContainer">
            <div className="SContainer">
                <h2>Edit Movie ID: 3</h2>
                <div className="AddUser">
                    <span className="editUserCol">
                    <label htmlFor="file-upload" className="custom-file-uploadEdit">
                    <img className="editImage" src={yourName}/>
                    <FontAwesomeIcon className="editImageIcon" icon={faPenToSquare} />
                    </label>
                    <input id="file-upload" type="file" />
                        <span className="editUserSCol">
                            <label>Title</label>
                            <input defaultValue="Your Name." type="text"></input>
                            <label>Description</label>
                            <textarea className="FColTextArea">Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.</textarea>
                        </span>
                    </span>
                    <label>Trailer Url</label>
                    <input defaultValue="https://www.youtube.com/watch?v=OJAvgHSeIhI" type="text"></input>
                    <label>IMDB</label>
                    <input defaultValue="https://www.imdb.com/title/tt5311514" type="text"></input>
                    <label>Genre</label>
                    <select>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option selected value="Drama">Drama</option>
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
                    </span>
                    <button className="btn btn-success addB">Save</button>
                </div>
            </div>
        </div>
    )
}
