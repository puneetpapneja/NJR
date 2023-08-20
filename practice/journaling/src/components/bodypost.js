import React from "react";
import { Container, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

function BodyPost () {
    return(
        <Container>
            <Row>
                <h1>Post Job</h1>
            </Row> 
            <Form className="justify-content-between">
                <Row>
                    <Form.Group className="mb-4" controlId="formGroupEmail" >
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3"controlId="formGroupPassword">
                        <Form.Label >Job Discription</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3"controlId="formGroupPassword">
                        <Form.Label >Max Salary</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Row>
                <Row className='text-center '>
                    <Form.Group className="mb-3">
                        <Button variant="dark" type="submit" size="lg">Post</Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}

export default BodyPost;