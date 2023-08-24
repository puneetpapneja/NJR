import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  // Sample data (you can replace this with real data)
  const appliedJobsCount = 15;
  const totalPosts = 50;
  const todaysPosts = 5;

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <Card.Text className="display-4 mb-0">{appliedJobsCount}</Card.Text>
              <Card.Title className="mt-3">Applied Jobs</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card bg="success" text="white" className="text-center">
            <Card.Body>
              <Card.Text className="display-4 mb-0">{totalPosts}</Card.Text>
              <Card.Title className="mt-3">Total Posts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card bg="info" text="white" className="text-center">
            <Card.Body>
              <Card.Text className="display-4 mb-0">{todaysPosts}</Card.Text>
              <Card.Title className="mt-3">Today's Posts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
