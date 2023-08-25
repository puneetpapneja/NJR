import { Card, Col, Row } from "react-bootstrap";

export default function AppliedStructure(props){
    return(
        <Card as={Col} lg="10" sm="10" className="border my-3 ms-5">
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col sm="6" lg="6">{props.props.title}({props.props._id})</Col>
                        <Col></Col>
                        <Col sm="4" lg="4" className="text-end text-muted fs-6 me-0">1 day ago</Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    <Row>
                        <Col>{props.props.description}</Col>
                    </Row>
                    <Row>
                        <Col className="float-end fs-6">applied</Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );

}