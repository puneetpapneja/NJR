import React from "react";
import Cards from "./Cards";
import { Card } from "react-bootstrap";
export default function DashboardBody() {
  return (
    <div>
      <Card.Title style={{ margin: "2.5vh 0 0 3vw" }}>DASHBOARD</Card.Title>
      <Cards />
    </div>
  );
}
