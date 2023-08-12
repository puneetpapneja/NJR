import React, { useState } from 'react';
import './login.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [Email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            setErrorMessage('');
            alert('Login successful!');
        } else {
            setErrorMessage('Invalid Email address or password');
        }
    };

    return (
        <>
            <div className="Register-container">
                <div className="Register-box">
                    <h2 style={{ textAlign: "center", fontFamily: "cursive" }}>Register</h2>
                    <form>
                        <div className="input-group">
                            <label>Email address:</label>
                            <input
                                type="text"
                                value={Email}
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
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="button" onClick={handleLogin} className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;