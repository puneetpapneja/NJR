import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{textAlign:"center"}}>
      <Container>
      
        <p>TM@2023-Techno India NJR Institute of Technology-All Rights Reserved</p>
      </Container>
      <Outlet/>
    </footer>
  );
};

export default Footer;
