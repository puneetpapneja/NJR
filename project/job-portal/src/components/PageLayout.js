import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./navbar";
import { Col, Container, Row } from "react-bootstrap";
import { getSession } from "../utils";
import Footer from "./footer";
import { useSelector } from "react-redux";

const PageLayout = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!getSession()) 
    {
      return (
        navigate("/login")
      );
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <Container fluid className="px-0 mx-0">
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