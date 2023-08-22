import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostJob = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col>
          <h2 className="text-left font-weight-bold">Post a Job</h2>
          <Form>
            <Form.Group>
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter job title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter job description" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Max Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter max salary" />
            </Form.Group>
            <div style={{ height: '20px' }}></div> 

            <div className="d-flex justify-content-center">
              <Button variant="dark" type="submit" className="mb-3">
                Post
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
     
   
    </Container>
  );
};

export default PostJob;
