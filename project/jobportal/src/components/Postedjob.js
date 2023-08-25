import { Container, Row } from "react-bootstrap";
import PostedStructure from "./PostedStructure";
import { getByEmail, reset } from "../store/reducers/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function PostedJob(){
    const dispatch  = useDispatch();
    const jobs = useSelector(state=>state?.job?.jobs);
    const emailId = useSelector(state=>state?.user?.emailId)
    const renderJobs=()=>{
        return jobs.map(job=>{
            // console.log(job);
            return(
                <Row className="mt-4">
                    <PostedStructure props={job} />
                </Row>
            );
        })
    }
    const data = {
        emailId:emailId
    }
    useEffect(()=>{
        dispatch(getByEmail(data));
    },[dispatch])
    useEffect(()=>{
        return()=>{
            dispatch(reset())
        }
    },[dispatch])
    return(
        <Container>
            <Row className="my-3 ms-5"><h1 style={{fontSize:"3em"}}>Posted Job</h1></Row>
            <Row>
                {/* <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/>
                <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/>
                <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/> */}
                {renderJobs()}
            </Row>
        </Container>
    );
}