import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";
import { Card, Dropdown, NavDropdown } from "react-bootstrap";
import personIcon from "./resources/person-fill.svg";
import profileIcon from "./resources/person-add.svg";
import logoutIcon from "./resources/box-arrow-right.svg";


const personStyle = { height: "auto", width: "2.5%", marginLeft: "1.8vw" };
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/dashboard">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/dashboard">
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
        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-icon"
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <Card.Img src={personIcon} alt="Profile" />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            <Dropdown.Item>
              <Link
                to="/profile"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Card.Img
                  src={profileIcon}
                  alt="Profile"
                  style={{ height: "auto", width: "30%" }}
                />{" "}
                Profile
              </Link>
            </Dropdown.Item>
            {/* <Dropdown.Divider /> */}
            <Dropdown.Item className="mt-2">
              <Card.Img
                src={logoutIcon}
                alt="Logout"
                style={{ height: "auto", width: "30%" }}
              />{" "}
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
