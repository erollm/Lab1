import React from "react";
import TableRow from "./TableRow";
import tempUsers from "../tempUsers";
export default function Users() {
   
    const [users, setUsers] = React.useState(tempUsers.map((user)=> ({...user, editing: false})))

    function editUser(id){
        setUsers((prevUser) => prevUser.map((user) => user.id === id ? ({...user, editing: true}) : ({...user})))       
    }

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
                        {users.map(user=> <TableRow key={user.id} username={user.username} firstname={user.firstname} lastname={user.lastname} email={user.email} handleClick={()=> editUser(user.id)} editing={user.editing}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}