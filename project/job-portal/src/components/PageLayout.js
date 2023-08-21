import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navbar";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils";
// import Login from "./Login";
import Footer from "./footer";
import LoginPage from "../pages/loginpage";

const PageLayout = () => {
  // if (!getSession()) {
  //   return <LoginPage />;
  // }

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
