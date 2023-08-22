import { Col, Container, Row } from "react-bootstrap";
import Square from "./Square";
const Content=()=>{
return(
<Container className="w-75 mt-5" >
    <Row >
        
        <h1>Dashboard</h1>
    </Row>
    <Container style={{marginTop:150}}>
    <Row className="h-100" >
        <Col xs="12" md="3" className="bg-danger"><Square value="7" title="Applied Job's" /></Col>
        <Col md="1"></Col>
        <Col xs="12" md="3" className="bg-success"><Square value="7" title="Applied Job's"/></Col>
        <Col md="1"></Col>
        <Col xs="12" md="3" className="bg-info"><Square value="7" title="Applied Job's"/></Col>
    </Row>
    </Container>
</Container>
)
}

export default Content;
