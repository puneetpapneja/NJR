import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const squareBoxStyle = {
    width: '100%',
    paddingBottom: '100%',
  };

  return (
    <Container style={{ marginTop: '5rem' }}>
      <h1 className="dashboard-heading mb-4">Dashboard</h1> {/* Added margin-bottom to the heading */}
      <Row className="dashboard-boxes justify-content-center align-items-center">
        <Col md={4} className="mb-20">
          <div
            className="dashboard-box bg-primary text-white text-center p-4"
            style={squareBoxStyle}
          >
            <h3>25</h3>
            <p>Applied Jobs</p>
          </div>
        </Col>
        <Col md={4} className="mb-20">
          <div
            className="dashboard-box bg-success text-white text-center p-4"
            style={squareBoxStyle}
          >
            <h3>15</h3>
            <p>Total Post</p>
          </div>
        </Col>
        <Col md={4} className="mb-20">
          <div
            className="dashboard-box bg-danger text-white text-center p-4"
            style={squareBoxStyle}
          >
            <h3>10</h3>
            <p>Today's Posts</p>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Dashboard;
