import React from 'react';
import { Container,Col, Row } from "react-bootstrap";

export default function DashBody() {
  return (
    <Container>
            <Row>
                <Col md="2"></Col>
                <Col xs="12"md="8">
                    <h1 style={{fontSize:"4em"}}>Dashboard</h1>
                </Col>
            </Row>
            <Row className='mt-5 '>
                <Col md="2" ></Col>
                <Col className="bg-info" xs="12" md="2" style={{fontSize:"20px", height:"200px", textAlign:"center"}}>
                   <h4 className='text-center text-white' style={{marginTop:"50px"}}>7</h4>
                   <p className='text-center text-white'>Applied Jobs</p>
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-danger" xs="12" md="2">
                   <h4 className='text-center text-white' style={{marginTop:"50px"}}>40</h4>
                   <p className='text-center text-white'>Total post</p>
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-primary" xs="12" md="2">
                   <h4 className='text-center text-white' style={{marginTop:"50px"}}>2</h4>
                   <p className='text-center text-white'>Today's post</p>
                </Col>
                <Col md="2"></Col>
            </Row>
        </Container>
  )
}
