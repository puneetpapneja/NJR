import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function PostedStructure(props) {
  const applicantNum = props.props.applyers.length;
  return (
    <Card
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        marginRight: "5%",
        marginLeft: "3%",
      }}
    >
      <Card.Body>
        <Container className="d-flex justify-content-between p-0">
          <Card.Title>{props.props.title}</Card.Title>
          <Link to="/">
            <i class="bi bi-eye float-end me-2 text-dark">{applicantNum}</i>
          </Link>
        </Container>
        <Card.Subtitle className="mb-2 text-muted">
          {props.props.companyName}
        </Card.Subtitle>
        <Card.Text>{props.props.description}</Card.Text>
        <span className="d-flex flex-row justify-content-between">
          <Card.Link>
            <i class="bi bi-trash3"></i>
          </Card.Link>
          <Card.Link>
            <i class="bi bi-pencil-square"></i>
          </Card.Link>
        </span>
      </Card.Body>
    </Card>
  );
}
