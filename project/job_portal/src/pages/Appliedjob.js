import React from 'react';
import {Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
//import Form from 'react-bootstrap/Form';

function Appliedjob() {
  return (
    <>
    <Navbar />
    <Row style={{ marginLeft: '1em' }}>
       <h1 className='d-flex'>Jobs</h1>
    </Row>
  
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span>Senior Software Developer</span>
        <span>MAX Salary 20-40k</span></Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        </Card.Text>
        <Button variant="dark">Apply</Button>
      </Card.Body>
    
      <Card.Header className="d-flex justify-content-between align-items-center mb-3" > 
        <span >Car Driver</span>
        <span>MAX Salary 10-15k</span></Card.Header>
     <Card.Body>
       <Card.Title>Description</Card.Title>
       <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       
       </Card.Text>
       <Button variant="dark">Apply</Button>
     </Card.Body>
   </Card>
   </>
  );
}

export default Appliedjob;