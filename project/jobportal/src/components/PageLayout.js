import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navbar";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils";
import Login from "./login";
import Footer from "./footer";
// import SignUp from "./SignUp";

// import Login from "./Login";
// import Everything from "./Everything";

const PageLayout = () => {
  if(!getSession())
  if (!getSession()) {
    return <Login />;
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
