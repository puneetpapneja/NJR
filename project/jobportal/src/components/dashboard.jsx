// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";
// import './Dashboard.css';
function Dashboard() {
  return (
    
     <>
      
      <Container>
        <h2 className="text-primary text-center">Dashboard</h2>
        <Row className="justify-content-center">
          <Col sm={3} className="bg-primary mt-5 me-5 p-5 column ">
            <h3>7</h3>
            <p>Applied Jobs</p>
          </Col>
          <Col sm={3} className="bg-danger mt-5 me-5 p-5 column">
            <h3>7</h3>
            <p>Applied Jobs</p>
          </Col>
          <Col sm={3} className="bg-success mt-5 p-5 column">
            <h3>7</h3>
            <p>Applied Jobs</p>
          </Col>
        </Row>
      </Container>
      {/* <Card.Body>
          <Card.Text className='bg-dark text-light text1'>
           TM &copy;2023-Techno India NJR Institute Of Technology-All Right Reserved
          </Card.Text>
        </Card.Body> */}  
     </>
   
  );
}

export default Dashboard;
