import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function PostJob() {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Post Job</h1>
            <Form>
                <Form.Group controlId="jobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter job title" />
                </Form.Group>

                <Form.Group controlId="jobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter job description" rows={4} />
                </Form.Group>

                <Form.Group controlId="maxSalary">
                    <Form.Label>Max Salary</Form.Label>
                    <Form.Control type="number" placeholder="Enter max salary" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </Container>
    );
}
