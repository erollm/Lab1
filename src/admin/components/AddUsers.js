import React from "react";

export default function AddUsers(){
    return(
        <div className="adminContainer">
        <div className="SContainer">
            <h2>Add New User</h2>
            <div className="AddUser">
            <label>First Name</label>
            <input type="text"></input>
            <label>Last Name</label>
            <input type="text"></input>
            <label>Username</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Password</label>
            <input type="password"></input>
            <label>Confirm Password</label>
            <input type="password"></input>
            <button className="btn btn-primary addB">Add</button>
            </div>
        </div>
        </div>
    )
}
 