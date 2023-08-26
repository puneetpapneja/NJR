import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '20rem' }} className='mb-3'> 
      <Card.Body>
        <Card.Title>Senior Developer(4536)<i class="bi bi-eye float-end"></i><p className='float-end me-2'>8</p></Card.Title>
        <Card.Subtitle className="mb-2 text-muted fw-light">KP developers</Card.Subtitle>
        <Card.Text className='fw-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<br/>
          <i class="bi bi-trash3"></i>
          <i class="bi bi-pencil-square float-end"></i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;