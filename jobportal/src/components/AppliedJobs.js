import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function JobApplication() {
  return (
    <Container className="mt-4">
      <h2>Applied Job</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>2 days ago</Card.Text>
          <Card.Text>Job description for the software developer position.</Card.Text>
          <Button variant="primary">Applied</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>2 days ago</Card.Text>
          <Card.Text>Job description for the software developer position.</Card.Text>
          <Button variant="primary">Applied</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>2 days ago</Card.Text>
          <Card.Text>Job description for the software developer position.</Card.Text>
          <Button variant="primary">Applied</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default JobApplication;
