import { Button, Card, CardGroup, Col, Row} from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import {React} from "react"

<<<<<<< HEAD
export const BoxDEs=(props)=>{
=======
export const Boxs=(props)=>{
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
    return(
        <Card className="m-3">
            <CardHeader><Row>
                <Col sm={10}><h5>{props.title}</h5></Col>
                <Col>
                <h5>Max Salary</h5>
                {props.salary}
                </Col>

            </Row></CardHeader>
            <Card.Title>Description</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit vitae, libero consequatur consequuntur repellendus temporibus tempore, blanditiis earum voluptatibus molestiae voluptates ea doloremque non officiis. A officiis corporis recusandae eum, asperiores quos vitae repellendus ipsum dolorum tempora fugit sunt voluptatibus atque praesentium sed amet alias accusamus unde ea mollitia? Ipsum reprehenderit sapiente minus?</Card.Text>
            <Col><Button variant="dark" className="mb-1">Apply</Button></Col>
       </Card>
    )
<<<<<<< HEAD
=======
}
export const Box=(props)=>{
    return (
        <Card className="m-3">
            <CardHeader><Row>
                <Col sm={10}><h5>{props.title}</h5></Col>
                <Col>
                <h5>Max Salary</h5>
                {props.salary}
                </Col>

            </Row></CardHeader>
            <Card.Title>Description</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit vitae, libero consequatur consequuntur repellendus temporibus tempore, blanditiis earum voluptatibus molestiae voluptates ea doloremque non officiis. A officiis corporis recusandae eum, asperiores quos vitae repellendus ipsum dolorum tempora fugit sunt voluptatibus atque praesentium sed amet alias accusamus unde ea mollitia? Ipsum reprehenderit sapiente minus?</Card.Text>
            <Col>Applied</Col>
       </Card>
    )
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
}