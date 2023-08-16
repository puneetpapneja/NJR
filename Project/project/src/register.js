import React from "react";
const Register=()=>{
    return(
        <div className="container mt-5" style={ {backgroundColor: 'lightgreen'} }>
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

                <button style={{backgroundColor: 'blueviolet' } } type="submit" className="btn btn-primary mt-3">Sign-Up</button>
            </form>
            <div className="mt-3">
                <a href="#">Have an account? Login Now!!</a>
            </div>
            <br></br>
        </div>
    )
}
export default Register;