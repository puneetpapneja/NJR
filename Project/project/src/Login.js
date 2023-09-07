import { Link, useNavigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { useUser } from './UserContext';
import { useEffect, useState } from 'react';
const Loginpg = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);
    const { setUserEmail } = useUser();
    const [usernameTaken, setUsernameTaken] = useState(false);

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!form.username || !form.password) {
            alert("Please enter both username and password.");
            return;
        }
    
        const user = users.find(user => user.username === form.username);
    
        if (user) {
            const userType = user.userType;
            if (userType === "seeker" || userType === "recruiter") {
                setUserEmail(user.username);
                navigate("/dashboard", { state: { userType } });
            } else {
                alert("User doesn't have the required userType.");
            }
        } else {
            alert("User doesn't Exist");
        }
    }

    const getUsers = async () => {
        const response = await fetch('http://localhost:7070/demo', {
            method: 'GET',
        });
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (

            <>
        
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={handleSubmit}>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                <span className="h1 fw-bold mb-0">Sign In!</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="text"
                                                    name="username"
                                                    onChange={handleForm} id="form2Example17" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example17">Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password"
                                                    name="password"
                                                    onChange={handleForm} id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                                                <Link to="/register">Register Now!</Link>
                                            </p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            </>
    );
}

export default Loginpg;