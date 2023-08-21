import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <Container>
      <Row>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1 style={{ textAlign: "center" }}>Profile</h1>
        </Col>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Resume</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
