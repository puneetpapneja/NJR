import { Container, Form, InputGroup, Row } from "react-bootstrap"
import { BoxDEs } from "./boxDs"
import React from "react"
const Job = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <h2>Jobs</h2>
                    <Form.Control type="search" className="m-3" placeholder="Search" >
                    </Form.Control>
                    <BoxDEs title="Senoir Software Developer" salary="20-40k/Month" />
                    <BoxDEs title="Car Driver" salary="12-20k/Month" />
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Job;