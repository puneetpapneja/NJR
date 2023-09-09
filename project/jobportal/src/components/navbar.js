import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { recruiterMenu,seekerMenu } from '../utils/constants';

function Navbarbody() {
  const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
  const renderNavItems=()=>{
    const navItems = hasRecruiter ? recruiterMenu : seekerMenu;
    return navItems?.map(item =>  <Nav.Link as={Link} to={item.path}>{item.name}</Nav.Link>
    )}
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
          > <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
            {renderNavItems()}  
            <Nav.Link as={Col} lg="5" style={{marginLeft:"520px"}} className=".justify-content-sm-end"><Form.Control type="text" placeholder="Search" /></Nav.Link>
            </Navbar.Collapse>
            <Nav.Link className=".justify-content-sm-end">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{marginRight:"30px"}}>
              <i style={{ fontSize: "30px" }} className="bi bi-person-circle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profilepage">
                  Profile 
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/login">
                 Logout 
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
      
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarbody;