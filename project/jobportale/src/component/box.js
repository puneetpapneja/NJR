import { Card, Col, Container, Row } from "react-bootstrap"

export const Box=(props)=>{
    return(
        <>

        <Card className={props.color} style={{height:"40%"}}>
            <Card.Title className="text-center text-white ">{props.qty}</Card.Title>
            <Card.Subtitle className="text-center text-white">{props.tittle}</Card.Subtitle>
        </Card>
        </>
    )
}