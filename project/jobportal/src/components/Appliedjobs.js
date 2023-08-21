import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Appliedjobs() 
{
  return (
    <Container>
     <div>
      <h1 style={{marginLeft:"5px" ,marginTop:"20px"}}>JOBS</h1>
      <Form className="d-flex"  style={{marginLeft:"5px",width:"1300px"}}>
            <Form.Control
            style={{border:"solid 1px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
     </div>
     <br/>
     <div>
     <Card>
      <Card.Header style={{backgroundColor:"gray"}}>
      <Row>
        <Col >
       <h4>Senior software Developers</h4>
        </Col>
        <Col>
        <Row  style={{marginLeft:"400px"}}>
         <h4>Company Name</h4>
        </Row>
        <Row style={{marginLeft:"430px"}}>
         <h6>Kp developers</h6>
        </Row>
        </Col>
         </Row>
       
       
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div>
          <Row>
        <Col>
        <Button variant="dark" className='text-center' style={{width:"100px"}} >Apply</Button>
        </Col>
        <Col style={{marginLeft:"900px"}}>
        <Row>
         <h3>Max Salary</h3>
        </Row>
        <Row>
         <h6>20-40k Month</h6>
        </Row>
        </Col>
         </Row>
        </div>
        
      </Card.Body>
    </Card>
    <br/>
    <Card>
      <Card.Header style={{backgroundColor:"gray"}}>
      <Row>
        <Col >
       <h4>Car driver</h4>
        </Col>
        <Col>
        <Row  style={{marginLeft:"400px"}}>
         <h4>Company Name</h4>
        </Row>
        <Row style={{marginLeft:"410px"}}>
         <h6>Celebal technology's</h6>
        </Row>
        </Col>
      </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div>
          <Row>
        <Col>
        <Button variant="dark" className='text-center' style={{width:"100px"}} >Apply</Button>
        </Col>
        <Col style={{marginLeft:"900px"}}>
        <Row>
         <h3>Max Salary</h3>
        </Row>
        <Row>
         <h6>12-20k Month</h6>
        </Row>
        </Col>
         </Row>
        </div>
        
      </Card.Body>
    </Card>
    <footer style={{backgroundColor:"black",height:"30px",marginTop:"200px"}}><p style={{color: "white",paddingBottom:"8px",textAlign:"center"}}>TM 2023 Techno India NJR Institute Of Technology-All Rights Reserved</p></footer>
     </div>
    </Container>
  );
}

export default Appliedjobs;