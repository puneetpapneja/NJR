import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Login.css';
function BasicExample() {
  return (
    <>
     <h1>Login Page</h1>
    <Form className="form">
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="input" type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className='mb-3' controlId='FormbasicPassword'>
        <Form.Text className='textmuted'>
        <Card.Link as ={Link}to ="/Registration">Dont have any account? register now </Card.Link>
        </Form.Text>
      </Form.Group>
      <Button className="btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default BasicExample;