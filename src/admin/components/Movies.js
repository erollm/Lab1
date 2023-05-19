import React from "react";
import "../css/style.css";
import totoro from "../../assets/images/covers/totoro.jpg";
import weatheringWithYou from "../../assets/images/covers/weatheringwithyou.jpg";
import yourName from "../../assets/images/covers/yourname.jpg";

export default function Users() {
    return (
        <div className="adminContainer">
            <div className="SContainer">
                <h2>Movies</h2>
                <button className="btn btn-outline-primary addB">Add New Movie</button>
                <table className="table table-hover table-bordered table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">Cover</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <td scope="col">Release</td>
                            <th scope="col">Rating</th>
                            <th scope="col">Length</th>
                            <th score="col">Genre</th>
                            <th score="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={totoro}/></td>
                            <td>My Neighbor Totoro</td>
                            <td>When two girls move to the country to be near their ailing mother, they have...</td>
                            <td>1988</td>
                            <td>8.1</td>
                            <td>1h 26m</td>
                            <td>Animation</td>
                            <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                        <tr>
                            <td><img src={weatheringWithYou}/></td>
                            <td>Weathering with You</td>
                            <td>A high-school boy who has run away to Tokyo befriends a girl who appears to b...</td>
                            <td>2019</td>
                            <td>7.5</td>
                            <td>1h 52m</td>
                            <td>Animation</td>
                            <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                        <tr>
                            <td><img src={yourName}/></td>
                            <td>Your Name.</td>
                            <td>Two teenagers share a profound, magical connection upon discovering they...</td>
                            <td>2016</td>
                            <td>8.4</td>
                            <td>1h 46m</td>
                            <td>Drama</td>
                            <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}