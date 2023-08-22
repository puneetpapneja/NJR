import {Container, Form, InputGroup, Row} from "react-bootstrap"
import { Boxs } from "./card"
import { getAllJobs } from "../store/reducer/jobSlice"
export const Job=()=>{
    
    return(
        <>
        <Container>
            <Row>
                <h2>Jobs</h2>
                <Form.Control type="search" className="m-3" placeholder="Search" >
                </Form.Control>
                <Boxs title="Senoir Software Developer" salary="20-40k/Month"/>
                <Boxs title="Car Driver" salary="12-20k/Month"/>
            </Row>
        </Container>
        </>
    )
}