import { Container, Form, Row } from "react-bootstrap"
import { BoxDEs } from "./card"
const Job = () => {
    return (
        <>
            <Container>
                <Row>
                    <h2>Jobs</h2>
                    <Form.Control type="search" className="m-3" placeholder="Search" >
                    </Form.Control>
                    <BoxDEs title="Senoir Software Developer" salary="20-40k/Month" />
                    <BoxDEs title="Car Driver" salary="12-20k/Month" />
                </Row>
            </Container>
        </>
    )
}
export default Job; 