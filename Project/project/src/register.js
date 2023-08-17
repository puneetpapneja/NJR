import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Register=()=>{
    return(
        <div className="container mt-5" style={ {backgroundColor: 'grey'} }>
            <h1 className="mb-4">Registor</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <button style={{backgroundColor: 'orange' } } type="submit" className="btn btn-primary mt-3">Sign-Up</button>
            </form>
            <div className="mt-3">
                <Link to="/login">Have an account? Login Now!</Link>
            </div>
            <br></br>
        </div>
    )
}
export default Register;