import { Container, Row } from "react-bootstrap";
import WithHeaderExample from "./CardApp";
export default function AppliedJobDetails(){
    return (
        <Container className="w-75 mt-5">
            <Row>
                <h1 className="mt-5 mb-4">Applied Job</h1>
            </Row>
            <Container>
                <WithHeaderExample />
            </Container>
        </Container>
    )
}