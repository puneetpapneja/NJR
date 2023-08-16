import React from "react";
import DashboardBox from "../componants/DashboardBox";
import Box from "../componants/DashboardBox";
import { Container } from "react-bootstrap";

const DashboardScreen = () => {
  return (
    <Container className="outer_box">
      <h1>Dashboard</h1>
      <Container className="dash_box">
        <Box title="7" content="Applied" backgroundColor="red" />
        <Box title="40" content="Total Post " backgroundColor="green" />
        <Box title="2" content="Today Post " backgroundColor="purple" />
      </Container>
    </Container>
  );
};

export default DashboardScreen;
