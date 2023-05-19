import React from "react";
import "../css/style.css";

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
                            <th scope="col">Name</th>
                            <th scope="col">Length</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Description</th>
                            <th score="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>erollm</td>
                            <td>Eroll</td>
                            <td>Muqkurtaj</td>
                            <td>em47336@ubt-uni.net</td>
                            <td><button className="btn btn-outline-success btn-sm firstB">SAVE</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>albanb</td>
                            <td>Alban</td>
                            <td>Sahiti</td>
                            <td>ab</td>
                            <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                        <tr>
                            <td>zgjimg</td>
                            <td>Zgjim</td>
                            <td>Grajçevci</td>
                            <td>ab</td>
                            <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}