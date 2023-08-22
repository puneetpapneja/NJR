import React from "react";
import { Container, Row } from "react-bootstrap";
import JobDescStruct from "./JobDescriptionStructure";
export default  function Jobs(){
    return(
      <Container className="my-3">
            <Row className="ms-5">
                <h1 style={{fontSize:"4em"}}>Jobs</h1>
            </Row>
            <Row className="mt-3">
                <JobDescStruct title="Software engineer" description="lorem ipsum set amet dolores" salary="12,12,123" />
            </Row>
            <Row className="mt-4">
                <JobDescStruct title="Blockchain engineer" description="lorem ipsum set amet dolores" salary="12,12,123" />
            </Row>
            <Row className="mt-4">
                <JobDescStruct title="Mechanical engineer" description="lorem ipsum set amet dolores" salary="12,12,123" />
            </Row>
            <Row className="mt-4">
                <JobDescStruct title="Prompt engineer" description="lorem ipsum set amet dolores" salary="12,12,123" />
            </Row>
      </Container>  
    );
}