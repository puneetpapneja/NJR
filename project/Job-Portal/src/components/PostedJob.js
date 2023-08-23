import React from "react";
import { Container, Row,Col,Card } from "react-bootstrap";

function PostedJob (){
    const PostedJobData =[
        {
            Title:"senior Devloper (4536)",
            Subtitle:"kp developer",
            Views:"8",
            description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            Title:"senior Devloper (4536)",
            Subtitle:"kp developer",
            Views:"8",
            description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            Title:"senior Devloper (4536)",
            Subtitle:"kp developer",
            Views:"8",
            description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
    ]
    return(
        <Container>
        <Row>
            <h1>Posted Job</h1>
        </Row>
        <br/> 
        <Row className="d-flex justify-content-between ">
        {PostedJobData.map((data) =>(
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between  ">
                            <span>{data.Title}</span>
                            <>{data.Views}</>
                        </Card.Title>
                        <Card.Subtitle>
                            <span>
                                {data.Subtitle}
                            </span>
                        </Card.Subtitle>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        </Container>
    )
    
}

export default PostedJob;