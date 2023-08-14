import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './login.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            setErrorMessage('');
            alert('Login successful!');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2 style={{ textAlign: "center", fontFamily: "cursive" }}>Register</h2>
                    <form>
                        <div className="input-group">
                            <label>Email Address:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                            <input type="radio" aria-label="Radio button for following text input" name='job' />Job Seeker
                            </div>
                            <div>
                            <input type="radio" aria-label="Radio button for following text input" name='job' />Job Recruiter
                            </div>
                        </div>
                        <div className="input-group">
                            <Link to="/Login">Have a account?Log in now</Link>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className='d-flex justify-content-center'>
                        <button type="button" class="btn btn-dark" onClick={handleLogin}>
                            Register
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;