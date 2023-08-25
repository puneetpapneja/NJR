import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './login.css';

const Login = () => {
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
                    <h2 style={{ textAlign: "center", fontFamily:"inherit" }}>Login</h2>
                    <form>
                        <div className="input-group">
                            <label>Username:</label>
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
                            <Link to="/Register">Dont have a account?Register now</Link>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className='d-flex justify-content-center'>
                            <button type="button" onClick={handleLogin} className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;