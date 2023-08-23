import {Container, Form, InputGroup, Row} from "react-bootstrap"
<<<<<<< HEAD
import { BoxDEs } from "./card"
export const Job=()=>{
=======
import { Boxs } from "./card"
import { getAllJobs } from "../store/reducer/jobSlice"
export const Job=()=>{
    
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
    return(
        <>
        <Container>
            <Row>
                <h2>Jobs</h2>
<<<<<<< HEAD
                
                <Form.Control type="search" className="m-3" placeholder="Search" >
                </Form.Control>
                <BoxDEs title="Senoir Software Developer" salary="20-40k/Month"/>
                <BoxDEs title="Car Driver" salary="12-20k/Month"/>
=======
                <Form.Control type="search" className="m-3" placeholder="Search" >
                </Form.Control>
                <Boxs title="Senoir Software Developer" salary="20-40k/Month"/>
                <Boxs title="Car Driver" salary="12-20k/Month"/>
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
            </Row>
        </Container>
        </>
    )
}