import {Container, Row, Col} from 'react-bootstrap';
import TextExample from './CardPost';
export default function Postedjob(){
    return(
    <Container className='w-80'>
        <Row className='mt-5'>
        <h1 className='mt-5 mb-4'> Posted Jobs</h1>
        </Row>
        <Row>
            <TextExample/>
        </Row>
    </Container>)
}