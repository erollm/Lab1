import React, {useContext, useEffect, useState} from "react";
import UserContext from '../../context/UserContext';


export default function TableRow(props){
    const {deleteUser, updateUser} = useContext(UserContext);
    const [formValues, setFormValues] = React.useState({
        firstname: props.firstname,
        lastname: props.lastname,
        username: props.username,
        email: props.email
    }); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    function editUser(e){
        e.preventDefault();
        updateUser(props.id, formValues);
    }
    return(
        <tr>
        <td>{props.editing ? <input className="editInput" name="username" value={formValues.username} onChange={handleInputChange}/> : props.username}</td>
        <td>{props.editing ? <input className="editInput" name="firstname" value={formValues.firstname} onChange={handleInputChange}/> : props.firstname}</td>
        <td>{props.editing ? <input className="editInput" name="lastname" value={formValues.lastname} onChange={handleInputChange}/> : props.lastname}</td>
        <td>{props.editing ? <input className="editInput" name="email" value={formValues.email} onChange={handleInputChange}/> : props.email}</td>
        <td className="d-flex">{props.editing ? <form onSubmit={editUser}><button className="btn btn-outline-success btn-sm firstB">SAVE</button></form> : <button className="btn btn-outline-warning btn-sm firstB" onClick={props.handleClick}>EDIT</button>}<button class="btn btn-outline-danger btn-sm" onClick={()=>{deleteUser(props.id)}}>DELETE</button></td>
    </tr>
    )
}