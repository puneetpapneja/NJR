import { Container, Form, Button} from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import React ,{useEffect}from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { loginValid } from '../store/reducers/userSlice';
import * as formik from 'formik';

const Login = () => {
    const { Formik } = formik;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const valid = useSelector(state=>state?.user?.isvalidUser);
    useEffect(()=> {
      if(valid){
        navigate("/dashboard")
        
      }
    })
    return (
      <Container className="d-flex justify-content-sm-center">
             <div className="w-25 p-1" >
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h2 className="mb-10 text-md-center">Login</h2>
          <Formik
          initialValues={{ emailId: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(loginValid({emailId:values.emailId, password:values.password}));
          }}
           >
            {({ handleSubmit, handleChange, handleBlur, values}) => (
               <Form  noValidate onSubmit={handleSubmit}>
               <Form.Group controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control 
                 type="email"
                  name="emailId"
                   placeholder="Enter email"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.emailId}
                  />
               </Form.Group>
     
               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" name="password" 
                 placeholder="Password" 
                
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                 />
                 <Form.Text muted>
                   Password must be at least 8 characters long.
                 </Form.Text>
               </Form.Group>
               <div className="mt-3 text-center">
           <Link to="/register"> Don't have an account? Register</Link>
          </div>
               <div className=" mx-auto">
               <Button  variant="dark" type="submit" className="btn btn-dark">
                 Login
               </Button>
               </div>
             </Form>
            )}
  
  
           </Formik>
         
  
          
          </div>
        </div>
      </Container>
    );
  }

export default Login;







