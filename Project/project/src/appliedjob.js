// Applyjob.js
import React from "react";
import NavbarComponent from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

const AppliedJobBlock = ({ category, email, description }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

const Applyjob = () => {
    const location = useLocation();
    const userType = location.state ? location.state.userType : null;

    return (
        <>
            <NavbarComponent userType={userType} />
            <div className="container mt-5">
                <h1>Applied Jobs</h1>

                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-stretch">
                        <AppliedJobBlock
                            category="Developer"
                            email="developer@example.com"
                            description="Experienced software developer."
                        />
                        <AppliedJobBlock
                            category="CAR Driver"
                            email="acr.driver@example.com"
                            description="Experienced driver with ACR license."
                        />
                        <AppliedJobBlock
                            category="Full Stack"
                            email="full.stack@example.com"
                            description="Skilled full-stack web developer."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Applyjob;