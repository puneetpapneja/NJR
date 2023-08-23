import React from "react";
import { Container, Row, Card } from "react-bootstrap";


function AppliedJob () {
    const AppliedJobData =[
        {
            Title: "Senior Developer (5676)",
            Subtitle:"kvdevelopers4858@gmail.com",
            days: "3 days to go",
            description:"Elon Musk officially took Twitter private and became the company's majority shareholder, finally ending a months-long acquisition saga. He appointed himself CEO and brought in his own team to clean house. Musk needed to take decisive steps to succeed against the major opposition to his leadership from both inside and outside the company.",
            Footer:"Applied"
        },
        {
            Title: "Senior Developer (5676)",
            Subtitle:"kvdevelopers4858@gmail.com",
            days: "3 days to go",
            description:"Elon Musk officially took Twitter private and became the company's majority shareholder, finally ending a months-long acquisition saga. He appointed himself CEO and brought in his own team to clean house. Musk needed to take decisive steps to succeed against the major opposition to his leadership from both inside and outside the company.",
            Footer:"Applied"
        },
        {
            Title: "Senior Developer (5676)",
            Subtitle:"kvdevelopers4858@gmail.com",
            days: "3 days to go",
            description:"Elon Musk officially took Twitter private and became the company's majority shareholder, finally ending a months-long acquisition saga. He appointed himself CEO and brought in his own team to clean house. Musk needed to take decisive steps to succeed against the major opposition to his leadership from both inside and outside the company.",
            Footer:"Applied"
        },
        {
            Title: "Senior Developer (5676)",
            Subtitle:"kvdevelopers4858@gmail.com",
            days: "3 days to go",
            description:"Elon Musk officially took Twitter private and became the company's majority shareholder, finally ending a months-long acquisition saga. He appointed himself CEO and brought in his own team to clean house. Musk needed to take decisive steps to succeed against the major opposition to his leadership from both inside and outside the company.",
            Footer:"Applied"
        },
    ]
    return(
        <Container>
            <Row>
                <h1>Applied Job</h1>
            </Row>
            <br/>
            {AppliedJobData.map((data) =>(
                <Card>
                    <Card.Body>
                    <Card.Title className=" d-flex justify-content-between">
                        <span>
                            {data.Title}
                        </span>
                        <>{data.days}</>
                    </Card.Title>
                    <Card.Subtitle>
                        <span>
                            {data.Subtitle}
                        </span>
                    </Card.Subtitle>
                    <Card.Text>{data.description}</Card.Text>
                    <Card.Text className="d-flex justify-content-end">{data.Footer}</Card.Text>
                    </Card.Body>
                    
                </Card>
            ))}
        </Container>
    )
}

export default AppliedJob;