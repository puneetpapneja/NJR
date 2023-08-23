import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { getSessionStorageItem } from "../utils/utils";
import Login from "./Login";
import Footer from "./Footer";
import SignUp from "./SignUp";
// import SignUp from "./SignUp";
const PageLayout = () => {
  const isLoggedIn = getSessionStorageItem("isLoggedIn");
  return (
    <>
      {isLoggedIn ? (
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
      ) : (
        <div>
          <Login />
          <SignUp />
        </div>
      )}
    </>
  );
};
export default PageLayout;