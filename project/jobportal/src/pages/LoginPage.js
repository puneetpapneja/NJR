import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { validateUser } from '../store/reducers/userSlice';
import * as formik from 'formik';
import * as yup from 'yup';

const LoginPage = () => {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValidUser = useSelector(state => state?.user?.isValidUser);
  useEffect(()=> {
    if(isValidUser){
      navigate("/dashboard")
    }
  },[isValidUser])
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Login</h2>
        <Formik
        initialValues={{ email: '', pwd: '' }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(validateUser({email:values.email, pwd:btoa(values.pwd)}));
        }}
         >
          {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
             <Form  noValidate onSubmit={handleSubmit}>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control 
               type="email"
                name="email"
                 placeholder="Enter email"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.email}
                />
             </Form.Group>
   
             <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="pwd" 
               placeholder="Password" 
              
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.pwd}
               />
               <Form.Text muted>
                 Password must be at least 8 characters long.
               </Form.Text>
             </Form.Group>
   
             <Button  variant="dark" type="submit" className="w-100">
               Login
             </Button>
           </Form>
          )}


         </Formik>
       

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/RegisterPage">Sign up</Link>
        </p>
      </div>
    </Container>
  );
}

export default LoginPage;
