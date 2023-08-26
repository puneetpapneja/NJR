import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectRegistrationStatus, selectRegistrationError, createuser } from '../store/reducers/userSlice';
import { JOB_RECURITER, JOB_SEEKER } from '../utils/constants';

const RegisterPage = () => {
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
     password: btoa(pwd)
    }); 
  }

  const handleCompanyName = (event) => {
    const companyName = event.target.value;
    setFormData({
      ...formData,
      companyName: companyName
    }); 
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // event.preventDefault();
    //   event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(createuser(formData));
    
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Register</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
          </Form.Group>
          {/* Other form fields */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePwdChange} />
          </Form.Group>
          {[JOB_SEEKER, JOB_RECURITER].map((role) => (
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
         
          <Button variant="link">
            Have an account? <Link to="/LoginPage">Log in</Link>
          </Button>
          <Button disabled={isLoading} variant="dark" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterPage;
