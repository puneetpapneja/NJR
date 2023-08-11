import react, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Container, Form, Row } from 'react-bootstrap';

const arr = new Set();
const Callback = () =>{
    const [count, setCount] =useState(0);
    const [number, setNumber] =useState(0);

    const handleIncrement = useCallback(() => setCount(count + 1), [count]);
    const handleDecrement = useCallback(() => setCount(count - 1) [count]);
    const incrementNumber = useCallback(() => setNumber(number + 1) [number]);

    useEffect(() =>{
        arr.add(handleIncrement);
        arr.add(handleDecrement);
        arr.add(incrementNumber);
        console.log("arr",arr);
    })

    return (
        <Container fluid>
            <Row>
                <Col><h1>useCallback Example</h1></Col>
            </Row>
            <Row>
                <Col>Count: {count}</Col>
                <Col>Number: {number}</Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <Button variant="secondary" onClick={handleIncrement}>Increment</Button>
                </Col>
                <Col xs={4}>
                    <Button variant="secondary" onClick={handleDecrement}>Decrement</Button>
                </Col>
                <Col xs={4}>
                    <Button variant="secondary" onClick={incrementNumber}>Increament Number</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Callback;