const Memo = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>MemoPractice</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Number : {number || "Not yet Entered"} <br />
          Counter : {counter || "Not yet Clicked"} <br />
          Square : {square}
        </Col>
      </Row>
      <Row>
        <Col xs={6}></Col>
      </Row>
    </Container>
  );
};
