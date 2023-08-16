import React from "react";
const Loginpg = () => {
    return (
        <div className="container mt-5" style={ {backgroundColor: 'lightgreen'} }>
            <h1 className="mb-4">Login</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <button type="submit" style={{backgroundColor: 'blueviolet' } } className="btn btn-primary mt-3">Login</button>
            </form>

            <div className="mt-3">
                <a href="#">Don't have an account? Register Now!</a>
            </div>
        </div>
    )
}


export default Loginpg;