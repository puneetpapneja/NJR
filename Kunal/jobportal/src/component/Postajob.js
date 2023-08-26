import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
function Postajob(){
    return ( <Container className='postdiv'>     
       <h1>Post a job</h1>
    <Form className='my-3 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Job description</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Max salary</Form.Label>
        <Form.Control type="text"  />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  );
}



export default Postajob;