import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import eyeIcon from "./resources/eye-icon.svg";
import CardHeader from "react-bootstrap/esm/CardHeader";
import data from "./resources/postedjobsdetails.json";
import trashIcon from "./resources/trash-icon.svg";
import editIcon from "./resources/pencil-square-icon.svg";
export default function Postedjobs() {
  return (
    <Container>
      <CardHeader style={{ fontSize: "3rem" }}>
        <b>Posted Jobs</b>
      </CardHeader>
      <div
        className="flex-wrap"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "normal",
        }}
      >
        {data.map((data) => (
          <Card
            className="d-flex flex-direction-column justify-content-between"
            style={{
              width: "25vw",
              margin: "1vw 1.5vw 1.5vw 1.5vw",
            }}
          >
            <Card.Body>
              <Container className="d-flex justify-content-between p-0">
                <Container>
                  <Card.Title>{data.position}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.company}
                  </Card.Subtitle>
                </Container>
                {data.views}
                <span>
                  <Card.Img
                    style={{
                      // marginLeft: "",
                      width: "120%",
                      height: "auto",
                      fill: "currentColor",
                    }}
                    src={eyeIcon}
                  />
                </span>
              </Container>
              <Card.Text>{data.description}</Card.Text>
              <Container
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <Card.Link href="#">
                  <Card.Img src={trashIcon} />
                </Card.Link>
                <Card.Link href="#">
                  <Card.Img src={editIcon} />
                </Card.Link>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
