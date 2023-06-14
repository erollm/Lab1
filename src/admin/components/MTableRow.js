import React, {useContext} from "react";


export default function MTableRow(props){
    const description = props.desc.slice(0, 81)+"...";
    const createdat = props.createdat.slice(0,10);
    return(
    <tr>
        <td><img src={"https://image.tmdb.org/t/p/original/"+props.img}/></td>
        <td>{props.title}</td>
        <td>{description}</td>
        <td>{createdat}</td>
        <td><button className="btn btn-outline-warning btn-sm firstB">EDIT</button><button class="btn btn-outline-danger btn-sm">DELETE</button></td>
    </tr>
    )
}