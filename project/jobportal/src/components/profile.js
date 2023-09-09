import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
const Profile = () => {
  
  return (
    <Container>
        <Form className="w-50 p-10" >
        <h1>Profile</h1>
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <Form.Group className="mb-3" controlId="formBasicfirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiclastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Resume</Form.Label>
            <Form.Control type="file" />
          </Form.Group>


          <div className=" mx-auto">
            <Button variant="dark" type="submit" className="btn btn-dark" as={Link} to="/" >
              Submit
            </Button>
          </div>
    </div>
      </Form>
    </Container>
  )
}
export default Profile;
