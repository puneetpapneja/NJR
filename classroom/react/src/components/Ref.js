import { useMemo, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Ref = () => {
    const [square, setSquare] = useState();
    const refNumber = useRef();
    const handleClick = () => {
        console.log("ref", refNumber);
        setSquare(getSquare(refNumber.current.value));        
    }

   
    const getSquare = (number) => {
        return parseInt(number) * 2;
    }
 

    return (<Container fluid>
        <Row>
            <Col><h1>useRef Example</h1></Col>
        </Row>
        <Row>
            <Col>
                square : {square}
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <Form.Control
                    ref={refNumber}
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"                    
                />
            </Col>
            <Col xs={6}>
            <Button variant="primary" onClick={handleClick}>click</Button>
            </Col>
        </Row>
    </Container>

    )
}

export default Ref;