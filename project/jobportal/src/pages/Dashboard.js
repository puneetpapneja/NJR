import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Image, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" className='col-lg-4'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto ">
            <Nav.Link href="#" >Home</Nav.Link>
            <Nav.Link href="#">Post a Job</Nav.Link>
            <Nav.Link href="#">Applied Jobs</Nav.Link>
            <Nav.Link href="#">Posted Jobs</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="search" placeholder="Search" className="mr-sm-2" />
            
          </Form>
          <Nav.Link href="#" className='col-xl-5'>
            <Image src="project\jobportal\src\components\pfp.png" alt="Profile" />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <h1>Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Link to="/Appliedjob">
            <Card className="bg-info text-white">
              <Card.Body>
              <Card.Title>
                    Applied Job
                    </Card.Title>
                <Card.Text>7 jobs</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </div>
          <div className="col-md-3">
            <Card className="bg-primary text-white">
              <Card.Body>
                <Card.Title>Total Posts</Card.Title>
                <Card.Text>40 posts</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="bg-success text-white">
              <Card.Body>
                <Card.Title>Today's Posts</Card.Title>
                <Card.Text>2 posts</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <footer className="bg-dark text-light text-center py-3">
        <p className="m-0">TM &copy; 2023 - Techno India NJR Institute Of Technology. All Rights Reserved.</p>
      </footer>
      </Container>
    </>
  );
}

export default Dashboard;
