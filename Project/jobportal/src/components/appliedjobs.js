import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const AppliedJobs = () => {
  return (
    <Container fluid>

      <h2 className="mt-4 mb-3">Jobs</h2>

      <Form>
        <Form.Group controlId="jobSearch">
          <Form.Control type="text" placeholder="Search jobs" />
        </Form.Group>
      </Form>

      <Row>
        <Col md={6}>
          {/* Card 1 */}
          <Card className="mb-3">
            <Card.Header>
              <Row>
                <Col xs={6}>
                  <h6>Job Title</h6>
                </Col>
                <Col xs={6} className="text-right">
                  <h6>Max Salary</h6>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Job description goes here...
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Card 2 */}
          <Card className="mb-3">
            <Card.Header>
              <Row>
                <Col xs={6}>
                  <h6>Job Title</h6>
                </Col>
                <Col xs={6} className="text-right">
                  <h6>Max Salary</h6>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Job description goes here...
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default AppliedJobs; 
