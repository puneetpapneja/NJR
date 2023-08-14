import { useMemo, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Memo = () => {
    const [number, setNumber] = useState();
    const [counter, setCounter] = useState(0);
    
    const handleClick = () => setCounter(counter + 1);
    const handleChange = (event) => setNumber(event.target.value)
    const getSquare = () => {
        console.log("getSquare called");
        return parseInt(number) * 2;
    }
    const square = useMemo(() => getSquare(),[number]);

    return (<Container fluid>
        <Row>
            <Col><h1>useMemo Example</h1></Col>
        </Row>
        <Row>
            <Col>
                Number : {number || 'Not yet entered'}   <br />
                Counter: {counter || 'Not yet clicked'} <br />
                square : {square}
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(event) => handleChange(event)}
                />
            </Col>
            <Col xs={6}>
            <Button variant="primary" onClick={handleClick}>click</Button>
            </Col>
        </Row>
    </Container>

    )
}

export default Memo;