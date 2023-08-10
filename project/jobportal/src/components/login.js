import  Container from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const login =()=>{
    <Form>
     <Form-header>Login</Form-header>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="register">
      <Form.Text className="text-muted">
          <Form.link>Don't have a account? Register Now</Form.link>
      </Form.Text>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
//     <Container fluid>
//     <Container-header>Login</Container-header>
//     <Row>
//       <Col></Col>
//     </Row>
//     <Row>
//       <Col></Col>
//     </Row>
//   </Container>

}
export default login;