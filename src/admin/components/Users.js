import React from "react";
import "../css/style.css";

export default function Users() {
    return (
        <div className="adminContainer">
            <div className="SContainer">
                <h2>Users</h2>
                <button className="btn btn-outline-primary addB">Add New User</button>
                <table className="table table-hover table-bordered table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th score="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className="editInput" type="text" defaultValue="erollm" /></td>
                            <td><input className="editInput" type="text" defaultValue="Eroll" /></td>
                            <td><input className="editInput" type="text" defaultValue="Muqkurtaj" /></td>
                            <td><input className="editInput" type="text" defaultValue="em47336@ubt-uni.net" /></td>
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