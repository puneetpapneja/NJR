import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavbarComponent from "./navbar";
const Dashboard = () => {
    return (
        <>
        < NavbarComponent/>
        <div className="container mt-5">
            <h2>Dashboard</h2>

            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Applied Jobs</h5>
                            <h3>10</h3> {/* Sample number; this can be dynamic */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Total Posts</h5>
                            <h3>50</h3> {/* Sample number */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Today's Posts</h5>
                            <h3>5</h3> {/* Sample number */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;