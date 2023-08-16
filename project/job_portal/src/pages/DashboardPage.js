import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
import { Row,Col, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function DashboardPage() {
  return (
    <>
       <Navbar />
      <Container className="mt-4">
        <h1>Dashboard</h1>
        <Row>
          <Col md={4}>
          <Button variant="danger" size="lg" className="btn-square btn-square-danger">
            <div>7</div>
              <div>Applied Jobs</div>
            </Button>
          </Col>
          <Col md={4}>
          <Button variant="success" size="lg" className="btn-square btn-square-success">
            <div>40</div>
              <div>Total Post</div>
            </Button>
          </Col>
          <Col md={4}>
          <Button variant="info" size="lg" className="btn-square btn-square-info">
            <div>2</div>
              <div>Today's Posts</div>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;