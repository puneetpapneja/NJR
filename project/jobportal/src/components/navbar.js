import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { recruiterMenu,seekerMenu } from '../utils/constants';

function Navbarbody() {
  const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
  const renderNavItems=()=>{
    const navItems = hasRecruiter?recruiterMenu:seekerMenu;
    return navItems.map((items)=>{
      return(
        <Nav.Link as={Link} to={items.path} className='me-5'>{items.name}</Nav.Link>      )
    })
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
          > <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
            {renderNavItems()}  
            <Nav.Link as={Col} lg="5" className="me-5"><Form.Control type="text" placeholder="Search" /></Nav.Link>
            </Navbar.Collapse>
            <i class="bi bi-person-circle px-4 fs-1"></i>
      
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarbody;