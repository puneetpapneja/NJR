import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    <Card className='w-100 rounded-0'>
      <Card.Header><Row><Col><h5  lg='6' md='6' xs='12' >Senior software developers</h5></Col><Col md='6' xs='12' lg='6' className='mt-2'><p className='float-end mb-0'>3 minutes ago</p></Col></Row></Card.Header>
      <Card.Body>
        <Card.Title>a@gmail.com</Card.Title>
        <Card.Text className='fw-light mb-0'>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        </Card.Text>
        <p className='text-end mb-0 mt-0'>Applied</p>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;