import React from "react";
import { Card } from "react-bootstrap";
import "./footer.css";
export default function Footer() {
  const cardStyle = {
    backgroundColor: "black",
    color: "white",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "100vw", // Adjust the maximum width as needed
  };
  return (
    <Card className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Text>
          TM @ 2023 - Techno India NJR Institute of Technology - All Rights
          Reserved
        </Card.Text>
      </Card.Body>
    </Card>
  );
}