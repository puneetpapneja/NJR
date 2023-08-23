import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import person from "./resources/person-fill.svg";
import SearchBar from "./SearchBar";

const personStyle = { height: "auto", width: "2.5%", marginLeft: "1.8vw" };
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/job">
              Jobs
            </Link>
            <Link className="nav-link" to="/post-a-job">
              Post A Job
            </Link>
            <Link className="nav-link" to="/applied-job">
              Applied Job
            </Link>
            <Link className="nav-link" to="/posted-job">
              Posted Job
            </Link>
          </Nav>
          <Form className="d-flex">
            <SearchBar nameClass="me-5" />
          </Form>
        </Navbar.Collapse>
        <img src={person} style={personStyle} />
      </Container>
    </Navbar>
  );
}