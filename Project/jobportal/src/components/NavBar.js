// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Link } from "react-router-dom";

// function NavScrollExample() {
//   // const [showOptions, setShowOptions] = useState(false);

//   // const handleProfileLogoClick = () => {
//   //   setShowOptions(!showOptions);
//   // };
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="/login">
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/register">
//               Register
//             </Nav.Link>
//             <Nav.Link as={Link} to="/job">
//               Job
//             </Nav.Link>
//             <Nav.Link as={Link} to="/postjob">
//               Post A Job
//             </Nav.Link>
//             <Nav.Link as={Link} to="/appliedjob">
//               Applied Job
//             </Nav.Link>
//             <Nav.Link as={Link} to="/postedjob">
//               Posted Job
//             </Nav.Link>
//             <Nav.Link as={Link} to="/dashboard">
//               Dashboard
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             {/* <Button variant="outline-success">Search</Button> */}
//             <i class="bi bi-person-circle"></i>
//           </Form>

//           {/* <Dropdown
//             show={showOptions}
//             onMouseEnter={handleProfileLogoClick}
//             onMouseLeave={() => setShowOptions(false)}
//           >
//             <Dropdown.Toggle variant="light">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 fill="currentColor"
//                 class="bi bi-person-circle"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                 <path
//                   fill-rule="evenodd"
//                   d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//                 />
//               </svg>
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
//               <Dropdown.Item>Logout</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
function NavScrollExample() {
  const [showOptions, setShowOptions] = useState(false);

  const handleProfileLogoClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/job">Jobs</Nav.Link>
              <Nav.Link href="/postjob">Post A Job</Nav.Link>
              <Nav.Link href="/appliedjob">Applied Job</Nav.Link>
              <Nav.Link href="/postedjob">Posted Job</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Dropdown
              show={showOptions}
              onMouseEnter={handleProfileLogoClick}
              onMouseLeave={() => setShowOptions(false)}
            >
              <Dropdown.Toggle variant="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavScrollExample;
