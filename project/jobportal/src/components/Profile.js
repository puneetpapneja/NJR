import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Profile() {
    return (
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
    );
}
