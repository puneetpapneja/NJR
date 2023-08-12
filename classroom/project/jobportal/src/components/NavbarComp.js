import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavbarComp() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ fontSize: "20px", color: "black", marginRight: "100px" }}
          >
            Job
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                style={{ fontSize: "20px", color: "black" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ fontSize: "20px", color: "black" }}
              >
                Post A Job
              </Nav.Link>
              <Nav.Link
                href="#"
                disabled
                style={{ fontSize: "20px", color: "black" }}
              >
                Applied Job
              </Nav.Link>
              <Nav.Link
                href="#"
                disabled
                style={{ fontSize: "20px", color: "black" }}
              >
                Posted Job
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="🔍 Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <button className="btn btn-primary">
                <i className="fas fa-user"></i>
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2 className="text-left" style={{ fontSize: "60px", color: "black" }}>
          Dashboard
        </h2>
      </Container>

      <Container className="my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-danger text-white text-center p-5 m-5">
              <h3>7 </h3>
              <p>
                <b>Applied Job's</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white text-center p-5 m-5">
              <h3>40</h3>
              <p>
                <b>Total Post</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary text-white text-center p-5 m-5">
              <h3>2 </h3>

              <p>
                <b>Today's Post</b>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <footer className="footer py-3 bg-black py-2 text-white text-center fixed-bottom">
        <p>
          &copy;TM@2023 - Techno India NJR Institute of Technology-All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
}

export default NavbarComp;
