import React, { useState, useMemo } from "react";

import { Button, Container, Form, Row, Col } from "react-bootstrap";

// function Memo() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <h1>useMemo</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           Number:{}
//           <br />
//           Counter:{}
//           <br />
//           Square:{}
//           <br />
//         </Col>
//       </Row>
//       <Row>
//       <Col xs={6}>
//           <Form.Control
//             type="text"
//             id="inputPassword5"
//             aria-describedby="passwordHelpBlock"
//             //onChange={(event) => handleChange(event)}
//           />
//         </Col>
//         <Col xs={6}>
//           <Button variant="primary" //onClick={handleClick}>
//           >
//             click
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

const Memo = () => {
  const [number, setNumber] = useState();
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter++);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>useMemo Example</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Number : {number || "Not yet entered"} <br />
          Counter: {"Not yet clicked"} <br />
          square : {}
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            //
            onChange={(event) => handleChange(event)}
          />
        </Col>
        <Col xs={6}>
          <Button variant="primary" onClick={handleClick}>
            click
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Memo;
