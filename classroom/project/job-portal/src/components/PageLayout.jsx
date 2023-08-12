import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils/utils";
import Login from "./Login";

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
    </Container>
  );
};

export default PageLayout;
