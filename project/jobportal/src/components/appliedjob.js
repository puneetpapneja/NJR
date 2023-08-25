import { Container, Form, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import React from 'react';
const appliedjob = () => {

    return (
        <Container>
            <Form className="w-100 p-10" >
                <h1>Applied Job</h1>
                <Card style={{ width: '79rem' }}>
                    <Card.Body>
                        <Card.Title>Senior Developer <div className='float-end'>1 day ago</div></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">abc@gmail.com</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            <span className='float-end'>Applied</span>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '79rem' }}>
                <Card.Body>
                <Card.Title>Full stack Developer <div className='float-end'>1 day ago</div></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">abc@gmail.com</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            <span className='float-end'>Applied</span>
                        </Card.Text>
                </Card.Body>

                </Card>

                <Card style={{ width: '79rem' }}>
                <Card.Body>
                <Card.Title>Full stack Developer <div className='float-end'>1 day ago</div></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">abc@gmail.com</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content. Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            <span className='float-end'>Applied</span>
                        </Card.Text>
                </Card.Body>

                </Card>

            </Form>
        </Container>
    )
}
export default appliedjob;