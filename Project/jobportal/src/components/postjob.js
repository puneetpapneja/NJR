import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postjob.css'; // Import your custom CSS file

const PostJob = () => {
  return (
    <Container fluid className="post-job-container">
      <div className="post-job-box">
        <h2 className="post-job-heading">Post a Job</h2>
        <Form>
          <Form.Group controlId="jobTitle" className="mb-3">
            <Form.Label className="label-left">Job Title</Form.Label>
            <Form.Control type="text" placeholder="Enter job title" required className="form-control" />
          </Form.Group>

          <Form.Group controlId="jobDescription" className="mb-3">
            <Form.Label className="label-left">Job Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter job description" required className="form-control" />
          </Form.Group>

          <Form.Group controlId="jobSalary" className="mb-3">
            <Form.Label className="label-left">Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter job salary" required className="form-control" />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn btn-primary">
            Post Job
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default PostJob;
