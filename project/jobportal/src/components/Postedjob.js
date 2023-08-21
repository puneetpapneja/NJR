import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { AiFillDelete } from "react-icons/ai";
import {BiMessageAltEdit} from "react-icons/bi";

function Postedjob() {
  return (
    <Container>
    <h1>Posted Job</h1>

    <div className='d-flex justify-content-between  m-auto'>
      <Row>
      <Col>
        <Card style={{ width: '26rem' }}>
        <Card.Body>
        <Card.Title>Senior developers (4536)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Kp developers</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        < AiFillDelete style={{width:"30px",height:"30px"}}/>
        <BiMessageAltEdit style={{width:"30px",height:"30px",marginLeft:"320px",marginTop:"13px"}}/>

        </Card.Body>
        </Card>

      </Col>
        

        <Col style={{marginLeft:""}}>
        <Card style={{ width: '26rem' }}>
        <Card.Body>
        <Card.Title>Senior developers (4566)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Kp developers</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        < AiFillDelete style={{width:"30px",height:"30px"}}/>
        <BiMessageAltEdit style={{width:"30px",height:"30px",marginLeft:"320px",marginTop:"13px"}}/>

        
        </Card.Body>
        </Card>

        </Col>

        <Col>
        <Card style={{ width: '26rem' }}>
        <Card.Body>
        <Card.Title>Senior developers (4598)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Kp developers</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        < AiFillDelete style={{width:"30px",height:"30px"}}/>
        <BiMessageAltEdit style={{width:"30px",height:"30px",marginLeft:"320px",marginTop:"13px"}}/>

        </Card.Body>
        </Card>
        

        </Col>

      </Row>
    </div>
    <footer style={{backgroundColor:"black",height:"30px",marginTop:"300px",marginRight:""}}><p style={{color: "white",paddingTop:"4px",textAlign:"center"}}>TM 2023 Techno India NJR Institute Of Technology-All Rights Reserved</p></footer>
    </Container>
    

   
  );
}

export default Postedjob;
