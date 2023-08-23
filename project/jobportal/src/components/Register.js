import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectRegistrationStatus, selectRegistrationError } from '../stores/reducers/userSlice';
import {React,useState} from "react";
import {Provider} from "react-redux";
import { Store } from "../stores/index";

function Register() {
  const [formData, setFormData] = useState({});
    
  const [selectedRole, setSelectedRole] = useState('');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.user?.isLoading);


  const handleRoleChange = (event) => {
    const role = event.target.value;
    setFormData({
      ...formData,
     type: role
    });    
  };

 const handleEmailChange = (event)=>{
    const email = event.target.value;
    setFormData({
      ...formData,
     emailId: email
    }); 
  }

 const handlePwdChange = (event)=>{
    const pwd = event.target.value;
    setFormData({
      ...formData,
     password: pwd
    }); 
  }

  const handleCompanyName = (event) => {
    const compnayName = event.target.value;
    setFormData({
      ...formData,
     compnayName: compnayName
    }); 
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
      event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(registerUser(formData));
    
  };
  return (
<>
<Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase text-center">Resgister</h2>
                <div className="mb-3">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center" >
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={handlePwdChange}/>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Have a account?login now
                        </a>
                      </p>
                    </Form.Group>
                    {['Job Seeker', 'Job Recruiter'].map((role) => (
            <Form.Check
              key={role}
              inline
              label={role}
              name="role"
              type="radio"
              value={role}
              id={`inline-role-${role}`}
              onChange={handleRoleChange}
              checked={formData?.type === role}
            />
          ))}
          {formData?.type === "Job Recruiter" && (
            <Form.Group controlId="formBasicCompany">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" onChange={handleCompanyName} />
            </Form.Group>
          )}
          {/* {registrationStatus === 'error' && (
            <div className="text-danger">Registration failed: {registrationError}</div>
          )}
          {registrationStatus === 'success' && (
            <div className="text-success">
              Registration successful! <Link to="/LoginPage">Login</Link>
            </div>
          )} */}
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default Register;