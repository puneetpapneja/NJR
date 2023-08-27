import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import JobDescStruct from "./JobsDesc";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/JobSlices";
export default function Jobs(){
    const jobs = useSelector(state=>state?.job?.jobs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllJobs());
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    const renderJobs = () => {
        if (!jobs) {
            return null; // or a loading indicator
        }

        return jobs.map(job => (
            <Row className="mt-4">
                <JobDescStruct props={job} />
            </Row>
        ));
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