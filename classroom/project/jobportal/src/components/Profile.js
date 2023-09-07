import React, { useState } from 'react';
import { Container, Form, Button,Toast } from 'react-bootstrap';


export default function Profile() {
    const [showToast,setShowToast]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTimeout(() => {
            setShowToast(true); 
            console.log("showToast set to true");

          }, 1000);
    }
    return (
        <div>
            <Container className='mt-4'>
            <h1 className=' mb-4' style={{marginLeft:'17vw'}}>Profile</h1> 
            <Form className='mx-auto'  style={{ width: '40%'}}>
                <Form.Group controlId='firstName' className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your first name' />
                </Form.Group>

                <Form.Group controlId='lastName' className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your last name' />
                </Form.Group>

                <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email' />
                </Form.Group>

                <Form.Group controlId='resume' className='mb-3'>
                    <Form.Label>Resume (CV)</Form.Label>
                    <Form.Control type='file' />
                </Form.Group>

                <div className='d-flex justify-content-center'>
                    <Button type='submit' style={{backgroundColor:'black', border:'none'}}>
                        Submit
                    </Button>
                </div>
            </Form>
           
        </Container>
        <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
        }}
        delay={3000} // Set the duration for how long the toast will be visible
        autohide
      >
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>
        </div>
        
    );
}