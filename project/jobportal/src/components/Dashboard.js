import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
    <div className='Dashboard'>
    <Container fluid>
    <h2 style={{marginLeft: "130px",marginTop: "50px",fontSize:"50px"}}>Dashboard</h2>
    <Row>
        <Col>
            <div className='bg-danger w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3 className='d-flex justify-content-between w-50  m-auto' style={{padding: "20px"}}>7</h3> 
            <p className='d-flex justify-content-between w-50 m-auto'>Applied Jobs</p>
            </div>
            </Col>
            <Col>
          <div className='bg-success w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3  className='d-flex justify-content-between w-50 m-auto' style={{padding: "20px"}}>40</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Total post</p>
            </div>
            </Col>
            <Col>
          <div className='bg-primary w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3  className='d-flex justify-content-between w-50 m-auto' style={{padding: "20px"}}>2</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Today's post</p>
            </div>
            </Col>
            </Row>
            {/* <footer style={{backgroundColor:"black",height:"30px",marginTop:"100px"}}><p style={{color: "white",padding:"10px",textAlign:"center"}}>TM © 2023 Techno India NJR Institute Of Technology-All Rights Reserved</p></footer> */}
    </Container>
    </div>
  );
}

export default Dashboard;