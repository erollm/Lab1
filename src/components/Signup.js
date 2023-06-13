import React, { useState } from "react";
import "../assets/css/Inputs.css";
import useAuthContext from "../context/AuthContext";

export default function Signup() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")
    const {register, errors} = useAuthContext()

    const handleSubmit = async (event) => {
      event.preventDefault();
      register({firstname, lastname, username, email, password, password_confirmation})
    }

    return (
		<div className="inputContainer signupbg">
			<form onSubmit={handleSubmit} className="inputBox">
				<h2>Sign up</h2>
				{errors.firstname && <p>{errors.firstname}</p>}
				{errors.lastname && <p>{errors.lastname}</p>}
				<span className="space-between">
					<input type="text" placeholder="First name" value={firstname} onChange={(e)=> setFirstname(e.target.value)}></input>
					<input type="text" placeholder="Last name" value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
				</span>
				<input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
				{errors.lastname && <p>{errors.username}</p>}
				<input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
				{errors.lastname && <p>{errors.email}</p>}
				<input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
				{errors.lastname && <p>{errors.password}</p>}
				<input type="password" placeholder="Confirm password" value={password_confirmation} onChange={(e)=> setPassword_Confirmation(e.target.value)}></input>
				<button type="submit" className="inputSubmit">Sign up</button>
				<span className="inputFooter">
					<p>Already have an CineView account?</p><a href="/Login">Sign in now.</a>
				</span>
				</form>
			</div>
        );
}