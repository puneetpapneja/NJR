import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const Login = ()=>{

return (
<div className="form-container">
<Form className="form">
<div className="form-content">
  <h1>Post Job</h1>
  <Form.Group className="mb-3" controlId="formBasicjobtitle">
    <Form.Label>Job Title</Form.Label>
    <Form.Control type="text" placeholder="Enter job" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Job Description</Form.Label>
    <Form.Control type="text" placeholder="Enter job description" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Max Salary</Form.Label>
    <Form.Control type="number" placeholder="Enter salary" />
  </Form.Group>


  <Button variant="dark" type="submit" className="btn" as={Link} to="#">
    POST
  </Button>
  </div>
</Form>
</div>
)
}
export default Login;