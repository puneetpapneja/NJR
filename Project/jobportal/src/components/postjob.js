import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PostJob = () => {
  return (
    <Container fluid>
      <h2 className="mt-4 mb-3">Post a Job</h2>
      <Form>
        <Form.Group controlId="jobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" required />
        </Form.Group>

        <Form.Group controlId="jobDescription">
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter job description" required />
        </Form.Group>

        <Form.Group controlId="jobSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter job salary" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post Job
        </Button>
      </Form>
    </Container>
  );
};

export default PostJob;
