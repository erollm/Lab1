import React, {useContext} from "react";
import UserContext from '../../context/UserContext';


export default function AddUsers(){
    const {createValues, handleInputChange, storeUser,errors} = useContext(UserContext);
    console.log(errors)
    return(
        <div className="adminContainer">
        <div className="SContainer">
            <h2>Add New User</h2>
            <form className="AddUser" onSubmit={storeUser}>
            <label>First Name</label>
            <input type="text" name="firstname" value={createValues.firstname} onChange={handleInputChange}></input>
            <label>Last Name</label>
            <input type="text" name="lastname" value={createValues.lastname} onChange={handleInputChange}></input>
            <label>Username</label>
            <input type="text" name="username" value={createValues.username} onChange={handleInputChange}></input>
            <label>Email</label>
            <input type="email" name="email" value={createValues.email} onChange={handleInputChange}></input>
            <label>Password</label>
            <input type="password" name="password" value={createValues.password} onChange={handleInputChange}></input>
            <label>Confirm Password</label>
            <input type="password" name="password_confirmation" value={createValues.password_confirmation} onChange={handleInputChange}></input>
            <button className="btn btn-primary addB">Add</button>
            </form>
        </div>
        </div>
    )
}
 