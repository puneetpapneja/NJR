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
        <h1>Profile</h1>
            <Card.Title></Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
             <Form.Label>Resume(CV)</Form.Label>
             <Form.Control type="file" />
            </Form.Group>
              
              <center>
              <Button variant="dark" >
                Submit
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