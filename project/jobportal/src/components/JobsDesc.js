import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { FormControl, InputGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export default function JobDescStruct (props){

    return(
      <>
        <Container>
          <Row lg={3}>
                    <Col>
                        <h1 style={{textAlign:"center"}}>{props.props.title}</h1>
                    </Col>
                </Row>
         
    <Container>
 <Card style={{marginTop:"20px"}}>
      
      <Card.Header as="h5">Frontend developer</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
        Join our team as a Frontend Developer and help create stunning, user-friendly web interfaces. You'll collaborate closely with designers to transform concepts into responsive, visually appealing websites and applications. Your expertise in HTML, CSS, and JavaScript, along with proficiency in frontend libraries and frameworks, will be instrumental in delivering seamless user experiences. If you're passionate about frontend development and thrive in a collaborative environment, apply now to contribute to our innovative projects.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="secondary">Apply</Button>
        </Col>
        <Col>
        <Card.Text as="h5" style={{marginLeft:"400px"}}>Max Salary</Card.Text>
        </Col>
        <Row style={{marginLeft:"990px",marginTop:"-15px"}}>
          {props.props.maxSalary}
        </Row>
        </Row>
      </Card.Body>
    </Card>
    <Card style={{marginTop:"20px"}}>
      
      <Card.Header as="h5">Backend developer</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
        Join our team as a Backend Developer and play a pivotal role in building the core of our web applications. You will work on server-side logic, database management, and API development to ensure our systems are efficient and scalable. Strong expertise in programming languages like Python, Java, or Node.js is essential, along with experience in database design and optimization. If you're passionate about developing robust, high-performance backend systems, apply now to be part of our dynamic development team.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="secondary">Apply</Button>
        </Col>
        <Col>
        <Card.Text as="h5" style={{marginLeft:"400px"}}>Max Salary</Card.Text>
        </Col>
        <Row style={{marginLeft:"990px",marginTop:"-15px"}}>
        {props.props.maxSalary}
        </Row>
        </Row>
      </Card.Body>
    </Card>
    </Container>
        </Container>
        </>
    )
}