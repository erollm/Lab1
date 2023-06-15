import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Inputs.css";
import useAuthContext from "../context/AuthContext";


export default function Login() {
	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, errors, user} = useAuthContext()

	const handleSubmit = async(event) => {
        event.preventDefault();
        login({email, password})
    }
	return (
		<div className="inputContainer loginbg">
			<form className="inputBox" onSubmit={handleSubmit}>
				<h2>Sign in</h2>
				<input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
				{errors && <p>{errors.email}</p>}
				<input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
				{errors && <p>{errors.password}</p>}
				<button type="submit" className="inputSubmit">Sign in</button>
				<span className="checkMark">
					<input type="checkbox"></input>
					<p>Remember Me</p>
				</span>
				<span className="inputFooter">
				<p>New to CineView?</p><Link to="/Signup">Sign up now.</Link>
				</span>
			</form>
		</div>
		);
}