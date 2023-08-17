import Card from 'react-bootstrap/Card';
function Box(props){
    return( 
    <>      
      <Card className='m-5 '  style={{ width: '13rem'  , height :"10rem" , backgroundColor: props.backgroundColor }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.content}
        </Card.Text>
      </Card.Body>
      </Card>
      </>

    );
 
 
}
export default Box;


