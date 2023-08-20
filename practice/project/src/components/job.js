import { Container, Form, Row } from "react-bootstrap"
import { BoxDEs } from "./card"
// import Footer from "./footer"
const Job = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <h2>Jobs</h2>
                    <Form.Control type="search" className="m-3" placeholder="Search" >
                    </Form.Control>
                    <BoxDEs title="Senoir Software Developer" salary="20-40k/Month" companyname="abc" />
                    <BoxDEs title="Car Driver" salary="12-20k/Month" companyname="xyz"/>
                    <BoxDEs title="Car Driver" salary="12-20k/Month" companyname="xyz"/>
                    <BoxDEs title="Car Driver" salary="12-20k/Month" companyname="xyz"/>
                </Row>
            </Container>
            {/* <Footer/> */}
        </>
    )
}
export default Job; 