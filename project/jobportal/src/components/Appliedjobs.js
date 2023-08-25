import { Col, Container, Row } from "react-bootstrap";
import AppliedStructure from "./AppliedStructure";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getAllForUser, reset } from "../store/reducers/jobSlice";

export default function Appliedjobs(){
    const dispatch = useDispatch();
    const id = useSelector(state=>state?.user?._id);
    const jobs = useSelector(state=>state?.job?.jobs);
    const data = {
        id:id
    }
    useEffect(()=>{dispatch(getAllForUser(data))},[dispatch])
    useEffect(()=>{
        return()=>{
            dispatch(reset())
        }
    },[dispatch])

    const renderJobs=()=>{
        return jobs.map((job)=>{
            return(
                    <Row>
                        <Col>
                            <AppliedStructure props={job}/>
                        </Col>
                    </Row>
            );
        })
    }
    return(
        <Container>
            <Row>
                <h1 style={{fontSize:"3em"}} className="mt-3 ms-5">Applied Jobs</h1>
            </Row>
            {renderJobs()}
        </Container>
    );
}