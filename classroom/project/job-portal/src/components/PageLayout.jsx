import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils/utils";
import Footer from "./Footer";

const PageLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getSession()) {
      navigate("/");
    }
  }, []);
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>{getSession() ? <Navigation /> : null}</Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col>{getSession() ? <Footer /> : null}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default PageLayout;