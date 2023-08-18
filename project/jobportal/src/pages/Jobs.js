import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Form, FormControl } from 'react-bootstrap';

function Appliedjob() {
  return (
    <div className="wrapper">
      <Container className="vh-100">
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>

        <div className="d-flex justify-content-center">
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>Senior Software Developer</span>
              <span>MAX Salary 20-40k</span>
            </Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <Card>
            <Card.Header>Car Driver</Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </div>
        
      </Container>
    
    </div>
  );
}

export default Appliedjob;