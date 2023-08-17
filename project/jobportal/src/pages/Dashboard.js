import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={3} className="text-center">
          <h2>Dashboard</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="text-center bg-primary">
            <Card.Body>
              <Card.Title>Applied Jobs</Card.Title>
              <Card.Text>
                7
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center bg-success">
            <Card.Body>
              <Card.Title>Total Posts</Card.Title>
              <Card.Text>
                40
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center bg-info">
            <Card.Body>
              <Card.Title>Today's Posts</Card.Title>
              <Card.Text>
                2
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
