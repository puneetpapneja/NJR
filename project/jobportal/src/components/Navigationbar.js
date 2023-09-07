import React from "react";
import { Navbar,Nav,Form, Col, Dropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { recruiterMenu, seekerMenu } from "../utils/constants";
import { setSession} from "../utils/utils"
import { reset } from "../store/reducers/userSlice";
export default function Navigationbar(){
    const hasRecruiter = useSelector(state=>state?.user?.hasRecruiter);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleclick  =() =>{
        setSession("");
        dispatch(reset())
        navigate("/login");
    }
    const renderNavItems=()=>{
        const navItems =  hasRecruiter?recruiterMenu:seekerMenu;
        return navItems.map((item)=>{
            return(
                <Nav.Link as={Link} to={item.path} className="me-5">{item.name}</Nav.Link>
            );
        })
    }
    return(
        <Container fluid className="px-0">
        <Navbar expand="md" className="bg-body-tertiary px-0">
            <Navbar.Brand as={Link} to="/" className="me-5 ms-3">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link>
            {renderNavItems()}            
            <Nav.Link as={Col} lg="5" className="me-5"><Form.Control disabled type="text" placeholder="Search" /></Nav.Link>
            </Navbar.Collapse>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="rounded-circle bg-body-tertiary border-0">
                        <i class="bi bi-person-circle px-4 fs-1 text-dark"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile"><i class="bi bi-person-fill-add fs-5"></i> Profile</Dropdown.Item>
                    <Dropdown.Item as={Button} onClick={handleclick}><i class="bi bi-box-arrow-right"></i> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </Navbar>
        </Container>
    );
}