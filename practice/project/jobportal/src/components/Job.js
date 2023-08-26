import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import JobDescStruct from "./JobDescriptionStructure";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";
export default  function Jobs(){
    const jobs = useSelector(state=>state?.job?.jobs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllJobs());
    },[dispatch])
    useEffect(()=>{
        return()=>{
            dispatch(reset())
        }
    },[dispatch])
    const renderJobs=()=>{
        return jobs.map(job=>{
            // console.log(job);
            return(
                <Row className="mt-4">
                    <JobDescStruct props={job} />
                </Row>
            );
        })
    }
    return(
      <Container className="my-3">
            <Row className="ms-5">
                <h1 style={{fontSize:"3em"}}>Jobs</h1>
            </Row>
            {renderJobs()}
      </Container>  
    );
}