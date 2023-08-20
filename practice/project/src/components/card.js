import { Button, Card, Col, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { React } from "react"
// import Footer from "./footer"

export const BoxDEs = (props) => {
    return (
        <>
        <Card className="m-3">
            <CardHeader><Row>
                <Col sm={10}><h5>{props.title}</h5></Col>
                <Col>
                    <h5>Company Name</h5>
                    {props.companyname}
                </Col>
            </Row></CardHeader>
            <Card.Title>Description</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit vitae, libero consequatur consequuntur repellendus temporibus tempore, blanditiis earum voluptatibus molestiae voluptates ea doloremque non officiis. A officiis corporis recusandae eum, asperiores quos vitae repellendus ipsum dolorum tempora fugit sunt voluptatibus atque praesentium sed amet alias accusamus unde ea mollitia? Ipsum reprehenderit sapiente minus?</Card.Text>
            <Row>
                <Col sm={10}><Button variant="dark" className="mb-1">Apply</Button></Col>
                <Col>
                    <h5>Max Salary</h5>
                    {props.salary}
                </Col>
            </Row>
        </Card>
        {/* <Footer/> */}
        </>
    )
}