import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
function Profile(){
    return ( <Container className='postdiv'>     
       <h1>Profile</h1>
    <Form className='my-3 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email"  />
        <Form.Label>Resume(CV)</Form.Label>
        <Form.Control type="file"  />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>

  );
}



export default Profile;