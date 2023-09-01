import React, { useEffect, useState } from "react";
import { Container, Form, Row,Col, Button } from "react-bootstrap";
import JobDescStruct from "./JobDescriptionStructure";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, getByFilters, reset } from "../store/reducers/jobSlice";
export default  function Jobs(){
    const [search,setSearch] = useState("")
    const dispatch = useDispatch();
    const HandleCLick = ()=>{
        // console.log({search:search})
        if(search){
            dispatch(getByFilters({search:search}));
        }
        else{
            dispatch(getAllJobs());
        }
    }
    useEffect(()=>{
        dispatch(getAllJobs());
    },[dispatch])
    useEffect(()=>{
        return()=>{
            dispatch(reset())
        }
    },[dispatch])
    const jobs = useSelector(state=>state?.job?.jobs);
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
            <Row>
                <Col md="2"></Col>
                <Form.Group as={Col} md="7" className="me-0 pe-0 rounded-0">
                    <Form.Control
                    className="rounded-left"  
                    type="text" 
                    placeholder="title or company"
                    onChange={(e)=>{
                        setSearch(e.target.value)
                        if(!e.target.value){
                            dispatch(getAllJobs());
                        }
                    }}
                    ></Form.Control>
                </Form.Group>
                <Col className="ms-0 ps-0">
                    <Button type="submit" variant="dark" className="rounded-0"onClick={HandleCLick}>search</Button>
                </Col>
                <Col md="2"></Col>
            </Row>
            {renderJobs()}
      </Container>  
    );
}