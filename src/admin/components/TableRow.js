import React from "react";

export default function TableRow(props){
    //<td><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
    return(
        <tr>
        <td>{props.editing ? <input className="editInput" defaultValue={props.username}/> : props.username}</td>
        <td>{props.editing ? <input className="editInput" defaultValue={props.firstname}/> : props.firstname}</td>
        <td>{props.editing ? <input className="editInput" defaultValue={props.lastname}/> : props.lastname}</td>
        <td>{props.editing ? <input className="editInput" defaultValue={props.email}/> : props.email}</td>
        <td>{props.editing ? <button className="btn btn-outline-success btn-sm firstB">SAVE</button> : <button className="btn btn-outline-warning btn-sm firstB" onClick={props.handleClick}>EDIT</button>}<button class="btn btn-outline-danger btn-sm">DELETE</button></td>
    </tr>
    )
}