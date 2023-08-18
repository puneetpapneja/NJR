import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Box from './box';
export default function Content() {

    return (
        <Container className='mt-5' >

            <Row className='ms-4' >
                <h1>Dashboard</h1>
            </Row>

            <Row className=' mt-3 justify-content-center' >
                <Col xs={12} md={3} className='p-4' style={{  backgroundColor:"#F44336"}} >
                    <Box
                        title='7'
                        subtitle='Applied Job's
                    />
                </Col>
                <Col  xs="12" md="1"></Col>
                <Col xs={12} md={3} className='p-4' style={{  backgroundColor:"#3BCA34"}}>
                    <Box
                        title='40'
                        subtitle='Total Post'
                    />
                </Col>
                <Col  xs="12" md="1"></Col>
                <Col xs={12} md={3} className='p-4' style={{  backgroundColor:"#9C27B0"}}>
                    <Box
                        title='2'
                        subtitle="Today's post's"
                    />
                </Col>
            </Row>
        </Container>
    );
}




