import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
const arr = new Set();
const Callback = () =>{
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    
    const handleIncrement = useCallback(() => setCount(count + 1), [count]);
    const handleDecrement = useCallback(() => setCount(count - 1),[count]);
    const incrementNumber = useCallback(() => setNumber(number +1),[number]);
    useEffect(()=> {
        arr.add(handleIncrement);
        arr.add(handleDecrement);
        arr.add(incrementNumber);
        console.log("arr", arr);
    })
    
    //alert("Size of array is " + arr.size);
    return (
        <Container fluid>
        <Row>
            <Col><h1>useCallback Example</h1></Col>
        </Row>  
        <Row>
            <Col>Count : {count}</Col>
            <Col>Number : {number}</Col>
        </Row>     
        <Row>
            <Col xs={4}>
            <Button variant="primary" onClick={handleIncrement}>Increament</Button>
            </Col>
            <Col xs={4}>
            <Button variant="primary" onClick={handleDecrement} >Decrement</Button>
            </Col>
            <Col xs={4}>
            <Button variant="primary" onClick={incrementNumber} >Increment Number</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default Callback;