import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
const JobsStructure = (props) => {
  return (
    <Card>
        <Card.Header as="h5">
      <Row>
        <Col lg='10' sm='10' className="fs-5">
            {props.post}
        </Col>
        <Col lg='2' sm='1'>
            <Row style={{fontSize:"0.9rem"}}>
                Company Name
            </Row>
            <Row style={{fontSize:"0.7rem"}}>
                {props.company}
            </Row>
        </Col>
      </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="dark">Apply</Button>
      </Card.Body>
    </Card>
  );
};

export default JobsStructure;
