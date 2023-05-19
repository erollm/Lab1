import React from "react";
import "../assets/css/Inputs.css";

export default function Login() {
	return (
		<div className="inputContainer loginbg">
			<div className="inputBox">
				<h2>Sign in</h2>
				<input type="email" placeholder="Email"></input>
				<input type="password" placeholder="Password"></input>
				<button className="inputSubmit">Sign in</button>
				<span className="checkMark">
					<input type="checkbox"></input>
					<p>Remember Me</p>
				</span>
				<span className="inputFooter">
				<p>New to CineView?</p><a href="/Signup">Sign up now.</a>
				</span>
			</div>
		</div>
		);
}