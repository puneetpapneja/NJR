import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios or another HTTP client library

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  const handlePostJob = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/post-job', {
        jobTitle,
        jobDesc,
        maxSalary,
      });

      // Handle the response as needed
      console.log(response.data.message);

      // Clear the form inputs
      setJobTitle('');
      setJobDesc('');
      setMaxSalary('');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Post a Job</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handlePostJob}>
            <Form.Group controlId="jobTitle" className="mb-4">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="jobDesc" className="mb-4">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter job description"
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="maxSalary" className="mb-4">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter salary"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostJob;
