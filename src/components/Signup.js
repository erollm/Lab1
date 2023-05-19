import React from "react";
import "../assets/css/Inputs.css";

export default function Signup() {
    return (
		<div className="inputContainer signupbg">
			<div className="inputBox">
				<h2>Sign up</h2>
				<span className="space-between">
					<input type="text" placeholder="First name"></input>
					<input type="text" placeholder="Last name"></input>
				</span>
				<input type="text" placeholder="Username"></input>
				<input type="text" placeholder="Email"></input>
				<input type="text" placeholder="Password"></input>
				<input type="text" placeholder="Confirm password"></input>
				<button className="inputSubmit">Sign up</button>
				<span className="inputFooter">
					<p>Already have an CineView account?</p><a href="/Login">Sign in now.</a>
				</span>
				</div>
			</div>
        );
}