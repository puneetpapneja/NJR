import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Loginpg = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // ... your login logic ...

        navigate("/dashboard");
    }

    return (
        <div className="container mt-5" style={{ backgroundColor: 'grey' }}>
            <h1 className="mb-4">Login</h1>
            
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <button type="submit" style={{ backgroundColor: 'orange' }} className="btn btn-primary mt-3">
                    Login
                </button>
            </form>

            <div className="mt-3">
                <Link to="/register">Don't have an account? Register Now!</Link>
            </div>
            <br />
        </div>
    );
}

export default Loginpg;