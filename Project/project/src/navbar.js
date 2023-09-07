import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userType = location.state ? location.state.userType : null;
    console.log("userType:", userType);

    const clickedappjobs = () => {
        setTimeout(()=>{
            navigate("/appliedjob", { state: { userType } });
        })
    };
    const postajobbtn = () => {
        setTimeout(()=>{
            navigate("/postajob", { state: { userType } });
        })
        
    };
    const dashboardbtn = () => {
        setTimeout(()=>{
            navigate("/dashboard", { state: { userType } });
        })
        
    };
    const postedjobbtn = () => {
        setTimeout(()=>{
            navigate("/postedjob", { state: { userType } });
        })
        
    };
    const logout = () => {
        setTimeout(()=>{
            navigate("/login", { state: { userType } })
        })
        
    }
    const clickedjobs = ()=>{
        setTimeout(()=>{
            navigate("/jobs", { state: { userType } })
        })
        
    }
    const [showOptions, setShowOptions] = useState(false);
    
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <nav style={{backgroundColor: '#92A8D1'}} className="navbar navbar-expand-lg navbar-light ">
            <div className="ml-3 position-relative" onMouseEnter={toggleOptions} onMouseLeave={toggleOptions}>
                <img
                    src="ic.jpg"
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '40px', height: '40px', margin: '10px', cursor: 'pointer' }}
                />

                {showOptions && (
                    <div className="profile-options bg-light border p-2 rounded position-absolute" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                    <Link className="d-block" >Profile</Link>
                    <Link className="d-block" onClick={logout}>Logout</Link>
                    
                    </div>
                )}
            </div>
            <a className="navbar-brand" href="#">Job Portal Project</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={dashboardbtn} href="#">Home</a>
                    </li>
                    {userType === "recruiter" && (
                    <>
                    <li className="nav-item">
                        <a className="nav-link" onClick={postajobbtn} href="#">Post a Job</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={postedjobbtn} href="#">Posted Jobs</a>
                        
                    </li>
                    </>)}
                    {userType === "seeker" && (
                    <>
                    <li className="nav-item">
                        <a className="nav-link" onClick={clickedjobs} href="#">Jobs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={clickedappjobs} href="#">Applied Jobs</a>
                    </li>
                    </>
                    )}
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </nav>
    );
};



export default NavbarComponent;
