
import Container from "react-bootstrap/esm/Container"
import { Box } from "./box"
import { Header } from "./header"
import {Col, Row} from "react-bootstrap"
import Card from 'react-bootstrap/Card'

export const Dashboard = () => {
    return (
        <>
            <Container>
                <Row>
                    <h1>Dashboard</h1>
                </Row>
                <Row>
                    <Col bg="secondary"><Box qty="45" tittle="sport" color="red"></Box></Col>
                    <Col><Box qty="45" tittle="sport" color="red"></Box></Col>
                    <Col><Box qty="45" tittle="sport" color="red"></Box></Col>
                </Row>
            </Container>
        </>
    )
}