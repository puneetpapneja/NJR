import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DashboardPage() {
  return (
    <>
      <br />
      <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link style={{color: "black"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color: "black"}} href="#Post A Job">Post A Job</Nav.Link>
            <Nav.Link style={{color: "black"}} href="#Applied job">Applied Job</Nav.Link>
            <Nav.Link style={{color: "black"}} href="#Posted Job">Posted</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DashboardPage;