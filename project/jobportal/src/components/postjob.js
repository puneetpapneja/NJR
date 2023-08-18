import { Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React from 'react';

const Postjob = () => {

  return (
    <Container className="d-flex justify-content-sm-center">
      <Form className="w-25 p-1" >
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h1 className="d-flex justify-content-center">Post Job</h1>

          <Form.Group className="mb-3" controlId="formBasicjobtitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdescription">
            <Form.Label>Job Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicsalary">
            <Form.Label>Max Salary</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <div class=" mx-auto">
            <Button variant="dark" type="submit" class="btn btn-dark" as={Link} to="#">
              POST
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  )
}
export default Postjob;