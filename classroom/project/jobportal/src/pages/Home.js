import React from "react";
// import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
    </div>
  );
}
