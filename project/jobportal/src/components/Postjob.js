import React, { useState } from 'react';
import {Alert, Button, Col, Container, Form, Row} from 'react-bootstrap';
export default function PostJob(){
    const [JobTitle,setJobTitle]=useState("");
    const [JobTitleError,setJobTitleError]=useState("");
    const [JobDescription,setJobDescription]=useState("");
    const [JobDescriptionError,setJobDescriptionError]=useState("");
    const Handleclick = (event)=>{
        if(!JobTitle)
        {
            event.preventDefault();
            setJobTitleError("*required");
            return;
        }
        if(!JobDescription)
        {
            event.preventDefault();
            setJobDescriptionError("*required");
            return;
        }
    }
    return(
        <Container fluid>
            <Form>
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="3">
                        <h1 className='my-3'>Post Job</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                        <Form.Group>
                            <Form.Label className='my-3' >Job Title</Form.Label>
                            <Form.Control 
                                type='text'
                                value={JobTitle}
                                onChange={
                                    (e)=>{
                                        setJobTitle(e.target.value);
                                        setJobTitleError("");
                                    }
                                } 
                            />
                            {JobTitleError && <Alert variant='danger'>{JobTitleError}</Alert>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                    <Form.Group>
                        <Form.Label className='my-3'>Job Description</Form.Label>
                        <Form.Control 
                            as='textarea'
                            rows={2}
                            value={JobDescription}
                            onChange={
                                (e)=>{
                                    setJobDescription(e.target.value);
                                    setJobDescriptionError("");
                                }
                            } 
                        />
                        {JobDescriptionError && <Alert variant='danger'>{JobDescriptionError}</Alert>}
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                    <Form.Group>
                        <Form.Label className='my-3'>Max Salary</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col lg="5"></Col>
                    <Col>
                        <Button variant='dark' type='Submit' className='my-5 px-5 fs-5' onClick={Handleclick}>Post</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}