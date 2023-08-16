
import Container from "react-bootstrap/esm/Container"
import { Box } from "./box"
import { Header } from "./header"
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'

export const Dashboard = () => {
    return (
        <>
            <Container>
                <Row>
                    <h1>Dashboard</h1>
                    <Col className="m-5">
                        <Row style={{height:"60vh"}}>
                            <Col><Box qty="7" tittle="Applied job's" color="bg-danger"></Box></Col>
                            <Col><Box qty="40" tittle="Total Post" color="bg-secondary"></Box></Col>
                            <Col><Box qty="2" tittle="Today's Post" color="bg-info"></Box></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}