import { Col, Container, Row } from "react-bootstrap";
import AppliedJobStructure from "./AppliedJobStructure";

export default function Appliedjobs(){
    return(
        <Container>
            <Row>
                <h1 style={{fontSize:"3em"}} className="mt-3 ms-5">Applied Jobs</h1>
            </Row>
            <Row>
                <Col>
                    <AppliedJobStructure Title="Senior Developer" time="1 day ago" id="5476" email="ksd@sdvg.sfg" description="lorem ipsum set amet dolores"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AppliedJobStructure Title="Senior Developer" time="1 day ago" id="5476" email="ksd@sdvg.sfg" description="lorem ipsum set amet dolores"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AppliedJobStructure Title="Senior Developer" time="1 day ago" id="5476" email="ksd@sdvg.sfg" description="lorem ipsum set amet dolores"/>
                </Col>
            </Row>
        </Container>
    );
}