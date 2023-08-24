import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import PostedJobStructure from './PostedJobStructure'

const Postedjobs = () => {
  return (
    <>
    <Row>
        <Col lg="1"></Col>
        <Col>
          <h1 className='fs-1 fw-bold m-3'>Posted Job</h1>
        </Col>
    </Row>
    <Row  className='justify-content-around mx-5 p-5'>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        <Col lg='4' className='mb-4'>
            <PostedJobStructure post='senior developer'/>
        </Col>
        
    </Row>
     </>
  )
}

export default Postedjobs
