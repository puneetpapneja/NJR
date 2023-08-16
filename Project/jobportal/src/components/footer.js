import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer mt-5 bg-dark text-white">
      <Container>
        <p className="text-center">
          TM @ 2023 - Techno India NJR Institute of Technology - All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
