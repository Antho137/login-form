import React, { useState } from "react";
import { Google } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        let usernameValid = false;
        const regexUsername = /^[a-zA-Z]+$/;
        if (!regexUsername.test(username)) {
            setUsernameError("Please enter a valid username. Only letters")
        }
        else {
            setUsernameError("");
            usernameValid = true;
        }

        let passwordValid = false;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,}$/;
        if (!regexPassword.test(password)) {
            setPasswordError("Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, 1 special character in (!@#$%&)")
        }
        else {
            setPasswordError("");
            passwordValid = true;
        }

        if (usernameValid && passwordValid) {
            alert('You enter\nEmail: ' + username + '\nPassword: ' + password +  '\nYou are successfully logged!');
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <form className="p-5 bg-white rounded shadow"  onSubmit={handleSubmit} autoComplete="off">
                <h2 className="pb-3">Login</h2>
                <div className="form-group pb-3">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="usernameHelp"
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                    <p className="error">{usernameError && 
                    <span>{usernameError}</span>}</p>
                </div>
                <div className="form-group pb-2">
                    <input 
                        type="password"
                        id="password"
                        name="Password"
                        className="form-control"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                    <p className="error">{passwordError && 
                    <span className="error">{passwordError}</span>}</p>
                </div>
                <div className="form-group form-check pb-3">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="loginCheck" 
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="loginCheck">
                        <small>Remember me</small>
                    </label>
                </div>
                <div className="input-container">
                    <button className="btn btn-primary w-100" id="submit" type="submit">Submit</button>
                </div>
                <div className="text-center py-2">
                    <small className="text-muted">Login with</small>
                </div>    
                <div className="text-center">
                    <button type="button" className="btn btn-outline-danger mx-1">
                        <Google className="google" />
                        <span>Google</span>
                    </button>
                    <button type="button" className="btn btn-outline-dark mx-1">
                        <Github className="github" />
                        <span>GitHub</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;