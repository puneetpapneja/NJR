import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center">Profile</h2>
      <Form>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group controlId="email" disabled>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" disabled />
        </Form.Group>
        <Form.Group controlId="resume">
          <Form.Label>Resume</Form.Label>
          <Form.Control type="file" />
          <Form.Text className="text-muted">
            Choose a file for your resume.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ProfilePage;
