import React, { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { apply } from "../store/reducers/jobSlice";
export default function JobDescStruct (props){
    const [applied,setApplied]=useState("");
    const _id= useSelector(state=>state?.user?._id);
    const emailId = useSelector(state=>state?.user?.emailId);
    const firstName = useSelector(state=>state?.user?.firstName);
    const lastName = useSelector(state=>state?.user?.lastName);
    const status = useSelector(state=>state?.status);
    const dispatch = useDispatch();
    const data ={
        id:props.props._id,
        fields:{
            _id:_id,
            firstName:firstName,
            lastName:lastName,
            emailId:emailId
        }
    }
    const handleClick = ()=>{
        setApplied("")
        dispatch(apply(data))
        if(!status){
            setApplied("applied successfully");
        }
        else{
            setApplied("application unsucessfull retry");
        }
    }
    // console.log("this is props data",props.props)
    return(
        <Container as={Col} xs="10" md="8" className="bg-tertiary border pb-2">
            <Row className="bg-secondary-subtle">
                <Col className="fs-4">{props.props.title}</Col>
                <Col className="float-end me-5" md="2">
                    <Row>
                        Max salary:
                    </Row>
                    <Row>
                       {props.props.maxSalary}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="fs-4">Description</Col>
            </Row>
            <Row>
                <Col className="text-muted">{props.props.description}</Col>
            </Row>
            <Row className="mt-3 mx-auto">
                <Col xs="8" md="5">
                <Button variant="dark" type="Submit" className="float-start text-white text-center mb-3" onClick={handleClick}>Apply</Button>
                </Col>
                {applied && <Alert>{applied}</Alert>}
            </Row>
        </Container>
    );
}