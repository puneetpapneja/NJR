import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
function Jobbox(props){
    return (
    <Card className='m-3'>
      <Card.Header >
      <Stack direction="horizontal" gap={3}>
      <div className="p-2">{props.header1}</div>
      <div className="p-2 ms-auto">{props.header2}</div>
    </Stack> 
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         {props.body}
        </Card.Text>
        <Stack direction="horizontal" gap={3}>
      <div className="p-2"> 
        <Button size="md" variant="dark">Apply</Button>
       </div>
      <div className="p-2 ms-auto"> <span>max salary <br/> {props.salary} </span></div>
    </Stack>
      </Card.Body>
    </Card>
  );
}

export default Jobbox;