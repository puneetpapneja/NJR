import React from "react";
import { Form } from "react-router-dom";
import Card from "react-bootstrap/Card";
import appliedJobs from "./resources/appliedJobsDetails.json";
export default function AppliedJobs() {
  return (
    <container>
    <Form>
      <Card.Title style={{ fontSize: "50px", marginLeft: "5vw" }}>
        Applied Job
      </Card.Title>
      {appliedJobs.map((items)=>(
        <Card classname="col-md-10 mt-5 m-auto">
        <Card.Title
              as="h5"
              className="d-flex justify-content-between"
              inline
          >
            <span>{items.title}</span>
            <>{items["days"]}</>
        </Card.Title>
        <Card.Body>
           {<Card.Subtitle><>{items["email"]}</></Card.Subtitle>}
            
            <Card.Text>{items.description}</Card.Text>
            <strong>
            <span>{items["AppliedStatus"]}</span>
            </strong>
            
          </Card.Body>
        </Card>  
  
      ))}
    </Form>
    </container>)
  }