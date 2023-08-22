import { Col, Container, Row} from "react-bootstrap"
import { Card2 } from "./Card2"

export const Posted=()=>{
    return(
        <>
        <Container  >
        <h1>Posted Job</h1>
        
        <Row>
            <Col><Card2></Card2></Col>
            <Col><Card2></Card2></Col>
            <Col><Card2></Card2></Col>
        </Row>
        </Container>
        </>
    )
}