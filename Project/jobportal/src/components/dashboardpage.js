import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './dashboardpage.css';
const Dashboard = () => {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">App Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#post-job">Post a Job</Nav.Link>
            <Nav.Link href="#applied-job">Applied Job</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#profile">
              <FaUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h2>Dashboard</h2>

      {/* Colored Boxes */}
      <Row>
        <Col md={4}>
          <div className="colored-box red">
            <h3>25</h3>
            <p>Box 1 Text</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="colored-box blue">
            <h3>50</h3>
            <p>Box 2 Text</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="colored-box green">
            <h3>75</h3>
            <p>Box 3 Text</p>
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <footer className="footer">
        <p>TM @ 2023 - Techno India NJR Institute of Technology - All Rights Reserved</p>
      </footer>
    </Container>
  );
};

export default Dashboard;
