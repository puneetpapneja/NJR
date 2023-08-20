import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const PostedJob = () => {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Senior Developer",
            description: "We are looking for an experienced Senior Developer to join our team. The ideal candidate will have a strong background in backend development using technologies such as Java, Python, or Node.js. You will be responsible for designing and implementing robust and scalable solutions, collaborating with cross-functional teams, and mentoring junior developers.",
        },
        {
            id: 2,
            title: "Full Stack Developer",
            description: "Are you a Full Stack Developer with a passion for both front-end and back-end development? Join our dynamic team and work on cutting-edge projects. As a Full Stack Developer, you will be involved in designing user interfaces, implementing RESTful APIs, and ensuring seamless integration between different parts of the application. Proficiency in React, Node.js, and relational databases is a must.",
        },
        {
            id: 3,
            title: "Car Driver",
            description: "Looking for a reliable and responsible Car Driver to join our transportation team. In this role, you will be responsible for safely transporting passengers to their destinations, adhering to traffic rules and regulations. You should have a valid driver's license, a clean driving record, and excellent communication skills. Experience in providing exceptional customer service is a plus.",
        },
    ]);

    const deleteJob = (id) => {
        const updatedJobs = jobs.filter(job => job.id !== id);
        setJobs(updatedJobs);
    };

    return (
        <>
            <NavbarComponent />
            <div className="container mt-4">
                <div className="row">
                    {jobs.map(job => (
                        <div key={job.id} className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{job.title}</h5>
                                    <p className="card-text">{job.description}</p>
                                    <button className="btn btn-danger" onClick={() => deleteJob(job.id)}>Delete</button>
                                    <Link to={`/job/${job.id}`}>
                                        <button className="btn btn-primary">View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostedJob;
