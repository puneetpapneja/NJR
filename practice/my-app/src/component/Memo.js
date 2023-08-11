import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useMemo, useState } from "react";


const  Memo =()=>{
    

    const [number ,setNumber]=useState();
 const [count ,setCount]=useState(0);
 function handleClick(){
    setCount(count+1);
    
 }



 function getnumber(event){
  const num=event.target.value;
    setNumber(num);
 }
 

 

function getSquare(){
   console.log("getSquare")
    return (parseInt(number)*parseInt(number));
 }
 const square = useMemo(() => getSquare(),[number]);

    return (
        <Container>
     <Row>
        <Col><h1>example of useMemo</h1></Col>
     </Row>
     <Row>
        <Col>Number:{number || "number is not defined"}  <br/>
         Count :{count || "not defined" }  <br/>
        Square :{square}  </Col>
     </Row>
      <Row>
      <Col sm={12} lg={6 } md={12}  >
       <Form.Control
       type='text'
       onChange={getnumber}

       />
       </Col>

        <Col>
        <Button variant="primary"  onClick={handleClick} >click</Button>
        </Col>
      </Row>

        </Container>
       
    );

}

export default Memo;