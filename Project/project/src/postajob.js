import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";

const Postajob = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [maxSalary, setMaxSalary] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle posting the job data to your backend or perform other actions
        console.log("Job Posted:", jobTitle, jobDescription, maxSalary);
    };

    return (
        <>
            <NavbarComponent />

            <div className="container mt-5">
                <h1>Post a Job</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="jobDescription" className="form-label">Job Description</label>
                        <textarea
                            className="form-control"
                            id="jobDescription"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="maxSalary" className="form-label">Max Salary</label>
                        <input
                            type="text"
                            className="form-control"
                            id="maxSalary"
                            value={maxSalary}
                            onChange={(e) => setMaxSalary(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        </>
    );
};

export default Postajob;