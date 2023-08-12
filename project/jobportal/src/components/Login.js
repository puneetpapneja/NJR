import React from 'react'
import { Link } from 'react-router-dom'
import './Login_Signup.css'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 grav_col'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
          <h2 className='text-center txt_col'>Sign In</h2>
          <div className='mb2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control'/>
          </div>
          <div className='mb2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control'/>
          </div>
          <div className='mb2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
            <label htmlFor='check' className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <br/>
          <div className='text-center'>
            <button className='grav_col txt2_col'>Sign In</button>
          </div>
          
          <div className='mt-2'>
            <a href='' className='txt_col text-start'>Forgot Password?</a>
            
            <Link to="/signup" className='ms-2 txt_col text-end '>Sign Up</Link>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Login



// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Login.css';
// function BasicExample() {
//   return (
//     <>
//      <h1>Login Page</h1>
//     <Form className="form">
       
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control className="input" type="email" placeholder="Enter email" />
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control className="input" type="password" placeholder="Password" />
//       </Form.Group>
//       <div>
//       <a href='/'>Don't have a account?Register Now</a>
//       </div>
//       <Button className="btn" variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </>
//   );
// }

// export default BasicExample;