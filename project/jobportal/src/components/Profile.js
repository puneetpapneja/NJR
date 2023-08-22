import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <Container>
    <h1 style={{marginTop:"30px"}}>Profile</h1>
      <Row className="justify-content-center" style={{marginTop:"30px"}}>
        <Col>
          
             
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control style={{width:"500px"}} type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control style={{width:"500px"}} type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control  style={{width:"500px"}} type="email" placeholder="mayankkaneriya3@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Resume(Cv)</Form.Label>
                  <Form.Control  style={{width:"500px"}} type="file" placeholder="" />
                </Form.Group>


               

             
              
              </Form>
        
        </Col>
      </Row>
    </Container>
    
  );
}

export default Profile