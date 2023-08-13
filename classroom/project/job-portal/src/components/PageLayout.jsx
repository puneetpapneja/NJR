import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils/utils";
import Login from "./Login";
import Footer from "./Footer";
const PageLayout = () => {
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
