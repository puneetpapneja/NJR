import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
import { Row, Button, Container } from 'react-bootstrap';

function Postjob() {
    const formControlWidth = '50%'; 
  return (
    <>
      <Navbar />
      <Row style={{ marginLeft: '1em' }}>
        <h1 className='d-flex mb-3'>Post Job</h1>
      </Row>
      <Form.Group className="text-black mb-3" style={{marginLeft: '10rem'}} controlId="jobTitle">
        <Form.Label style={{marginLeft: '15rem'}}>Job Title </Form.Label>
        <Form.Control type="text" style={{ width: formControlWidth, marginLeft: '15rem' }} />
      </Form.Group>
      <Form.Group className="text-black mb-3" style={{marginLeft: '10rem'}} controlId="jobDescription">
        <Form.Label style={{marginLeft: '15rem'}}>Job Description</Form.Label>
        <Form.Control as="textarea"  style={{ width: formControlWidth, marginLeft: '15rem' }} rows={3} />
      </Form.Group>
      <Form.Group className="text-black mb-3" style={{marginLeft: '10rem'}} controlId="maxSalary">
        <Form.Label style={{marginLeft: '15rem'}}>Max Salary</Form.Label>
        <Form.Control type="text" style={{ width: formControlWidth, marginLeft: '15rem', }} />
      </Form.Group>
      <Container className='text-center'>
        <Button type="submit" variant='dark' className="mt-3">
          Post
        </Button>
      </Container>
    </>
  );
}

export default Postjob;
