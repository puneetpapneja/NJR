import { Col, Container ,Row} from "react-bootstrap";

export default function Footer(){
  return (
    <Container fluid className="fixed-bottom">
        <Row className="text-center text-white bg-dark align-middle justify-content-bottom my-0">
          <Col lg="12" sm="12" md="12">
            <p className=" py-0 my-0">TM@2023-Techno India NJR Institute of Technology-All Rights Reserved</p>
          </Col>
        </Row>
    </Container>
  )
}