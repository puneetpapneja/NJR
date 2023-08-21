import Button from 'react-bootstrap/Button';
import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col,Row } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import './Login.js';
function dashboard() {
  return (
    <div className="container">
    
    <h2 className="text-primary text-center">Dashboard</h2>
    <Row className='ms-5'>
     <Col sm={3} className='bg-primary m-5 me-3 column '>
      <h3>7</h3>
      <p>Applied Jobs</p>
     </Col>
      <Col sm={3} className='bg-danger m-5 column'>
      <h3>7</h3>
      <p>Applied Jobs</p>
     </Col>
      <Col sm={3} className='bg-success ms-3 me-3 mt-5 column'>
      <h3>7</h3>
      <p>Applied Jobs</p>
     </Col>
    </Row>
    <Card.Body>
          <Card.Text className='bg-dark text-light text1'>
           TM &copy;2023-Techno India NJR Institute Of Technology-All Right Reserved
          </Card.Text>
        </Card.Body>
    
    </div>
  );
}

export default dashboard;