import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';


function footer() {
    return (
      <>


      <Navbar fixed="bottom" bg="dark" variant="dark" className='d-flex' style={{ marginBottom: "1rem" }}>
        <Container>
          <Navbar.Text>
          TM @ 2023-Techno India NJR Institute of Technology - All Rights Reserved
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
export default footer;