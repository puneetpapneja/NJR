import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
import { useDispatch } from "react-redux";
import { addJob } from "./actions/jobActions";
const Postajob = () => {
    const [form,setform]= useState({});
    const dispatch = useDispatch();
    

    const handleFunc = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addJob(form));
    }




    const handlefunc=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value,
        })
    }
    const handlesubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:8080/demo',{
            method: 'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    }

    return (
        <>
            <NavbarComponent />
            
            
            <div className="container mt-5">
                <h1>Post a Job</h1>

                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                        <input
                            type="text"
                            name="jobtitle"
                            className="form-control"
                            id="jobTitle"
                            onChange={handlefunc}
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="jobDescription" className="form-label">Job Description</label>
                        <input
                            name="jobdesc"
                            className="form-control"
                            id="jobDescription"
                            onChange={handlefunc}
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="maxSalary" className="form-label">Max Salary</label>
                        <input
                            name="jobsal"
                            type="number"
                            className="form-control"
                            id="maxSalary"
                            onChange={handlefunc}
                            
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        </>
    );
};

export default Postajob;