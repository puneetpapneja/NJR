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
      
      <Card.Header as="h5">Senior developer</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque sunt optio vel blanditiis dolore incidunt recusandae nesciunt accusantium ea voluptas eum temporibus unde, architecto quod non perspiciatis ratione eaque.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="dark">Apply</Button>
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
      
      <Card.Header as="h5">Senior developer</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque sunt optio vel blanditiis dolore incidunt recusandae nesciunt accusantium ea voluptas eum temporibus unde, architecto quod non perspiciatis ratione eaque.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="dark">Apply</Button>
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