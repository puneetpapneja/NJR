import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = () => {
  return (
    <Container>
      <h1 className="dashboard-heading">Dashboard</h1>
      <Row className="dashboard-boxes">
        <Col md={4}>
          <div className="dashboard-box">
            <h3>25</h3>
            <p>Total Jobs</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="dashboard-box">
            <h3>15</h3>
            <p>Posted Jobs</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="dashboard-box">
            <h3>10</h3>
            <p>Applied Jobs</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
