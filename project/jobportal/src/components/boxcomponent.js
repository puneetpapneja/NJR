import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


function Boxcomponent() {
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
    </div>
      );
}

export default Boxcomponent;