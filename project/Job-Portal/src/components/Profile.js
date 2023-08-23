import React from "react";
import { Row,Form,Button, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

function Profile () {
    return(
        <Container>
            <Row>
                <h1>Profile </h1>
            </Row>
            <Form className="justify-content-between w-50 position-absolute top-50 start-50 translate-middle">
                <Row>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Name" placeholder="Last Name" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Example@gmail.com"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label>Resume(CV)</Form.Label>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        Choose file
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Row>
                <Row className="text-center">
                    <Form.Group>
                        <Button variant="dark" type="submit" size="lg">Submit</Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}

export default Profile; 