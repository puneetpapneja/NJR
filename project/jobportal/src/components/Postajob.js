import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Menu from "./Menu";
import "../App.css";
const PostAJob = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center" id="Postajob">
          <Col xs={12} md={6}>
        <h1>Post A Job</h1>
            <Card.Title></Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Job Description</Form.Label>
                <Form.Control type="password"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Max Salary</Form.Label>
                <Form.Control type="password"  />
              </Form.Group>
              
              <center>
              <Button variant="dark" >
                POST
              </Button>
              </center>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostAJob;