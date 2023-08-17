import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./index.css";

const  Cards =()=> {
    return (
        <Container className='container'>
            <Row className='row1'>
                <Col><h2>Dashboard</h2></Col>

            </Row>
            <Row className='row2'>

                <Col className='col1'>
                    <div className='carditems'>
                        <h1>7</h1>
                        <h3>Applied Jobs</h3>
                    </div>
                </Col>

                <Col className='col2'>
                    <div className='carditems'>
                        <h1>40</h1>
                        <h3>Total Posts</h3>
                    </div>
                </Col>

                <Col className='col3'>
                    <div className='carditems'>
                        <h1>2</h1>
                        <h3>today's Post's</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;