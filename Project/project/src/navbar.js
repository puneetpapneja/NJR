import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const clickedappjobs=()=>{
        navigate("/appliedjob");  
    }
    const postajobbtn=()=>{
        navigate("/postajob");  
    }
    const dashboardbtn=()=>{
        navigate("/dashboard");  
    }
    const postedjobbtn=()=>{
        navigate("/postedjob");  
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Job Portal Project</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={dashboardbtn} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={postajobbtn} href="#">Post a Job</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={clickedappjobs} href="#">Applied Jobs</a>
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={postedjobbtn} href="#">Posted Jobs</a>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>

                <div className="ml-3">
                    <img src="path_to_your_profile_pic.jpg" alt="Profile" style={{ borderRadius: '50%', width: '40px', height: '40px' }}/>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;