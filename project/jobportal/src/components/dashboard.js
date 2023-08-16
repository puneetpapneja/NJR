import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css";


function Boxcomponent() {
       return (
       <CardGroup className='container'>
        <div className='box1'>
        <h1 align="center">7</h1>
           <p align="center">Applied Jobs</p>
        </div>

      <div className='box2'>
      <h1 align="center">40</h1>
           <p align="center">Total Post</p>
     </div>

      <div className='box3'>
      <h1 align="center">2</h1>
           <p align="center">Today's post's</p>    
      </div>
      </CardGroup>
    // <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 3 }).map((_, idx) => (
    //     <Col key={idx}>
    //       <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
      );
}

export default Boxcomponent;