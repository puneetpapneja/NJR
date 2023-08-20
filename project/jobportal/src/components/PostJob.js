import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Row , Col } from 'react-bootstrap';
function PostJob() {
  return (
    <Container style={{marginTop: "200px"}}>
        <Row className="justify-content-center" id="Postajob">
        <Col xs={12} md={6}>
    <Form>
        <h1>Post Job</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Job description</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Max Salary</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Button style={{marginLeft: "300px",marginTop :"50px"}} variant="dark" type="submit">
        post
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}

export default PostJob;