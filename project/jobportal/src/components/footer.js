import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{textAlign:"center"}}>
      <Container>
        {/* <Row>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={6}>
            <h3>Follow Us</h3>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row> */}
        TM@2023-Techno India NJR Institute of Technology-All Rights Reserved
      </Container>
    </footer>
  );
};

export default Footer;
