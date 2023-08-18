import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";


function RegestrationForm () {
    return(
        <Container className=" justify-content-between align-items-center border border-black shadow-lg p-5 mb-4 bg-body-tertiary rounded w-25 bg-dark-subtle text-emphasis-dark h-25" >
            <Form >
                <Row>
                    <Form.Group className="mb-2">
                        <h2 className='text-center'>Register</h2>
                    </Form.Group>
                </Row>

                {/* EMAIL */}
                <Row>
                    <Form.Group className="mb-4">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Your Email"/>
                    </Form.Group>
                </Row>
           
                {/* PASSWORD */}
                <Row>
                    <Form.Group className="mb-4">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </Row>
            
                {/* REPEAR PASSWORD */}
                <Row>
                    <Form.Group className="mb-4">
                        <Form.Control type="password" placeholder="Repeat Your Password"/>
                    </Form.Group>
                </Row>
            
                {/* Radio */}
                <Row className="mb-3">
                    <Col xs="auto">
                        <Form.Check
                            type="radio"
                            label="Job Seeker"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            type="radio"
                            label="Job Recruiter"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                    </Col>
                </Row> 

                <Row>
                    <Form.Group>
                    <Col xs="auto" className="my-1 ">
                        <a href="#">Have a account? Login Now</a>
                    </Col>
                    </Form.Group>
                </Row>
            
                <Row>
                    <Form.Group className="mb-4">
                        <Button variant="primary" type="submit" size="lg">Regester</Button>
                    </Form.Group>
                </Row>
           

            </Form>
        </Container>

        
        
    )
}
export default RegestrationForm;