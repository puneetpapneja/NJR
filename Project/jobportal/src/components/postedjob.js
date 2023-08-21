import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiNotePencilThin} from 'react-icons/pi';

import { AiOutlineEye} from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function Postedjob() {

    return ( 
<>  
<h1>Posted Jobs</h1> 
<Container style={{display:'flex'}}>
     

     <Card style={{ width: '18rem',margin:'50px' }}>
      <Card.Body>
        <Card.Title>Card Title
        <h7 style={{ marginLeft:'100px'}}>8  
        <AiOutlineEye />
        </h7>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <RiDeleteBin6Line  style={{fontSize:'2rem'}}/>
        <PiNotePencilThin  style={{fontSize:'2rem' , marginLeft:'150px'}}/>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',margin:'50px' }}>
      <Card.Body>
        <Card.Title>Card Title
        <h7 style={{ marginLeft:'100px'}}>8  
        <AiOutlineEye />
        </h7>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <RiDeleteBin6Line  style={{fontSize:'2rem'}}/>
        <PiNotePencilThin  style={{fontSize:'2rem' , marginLeft:'150px'}}/>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',margin:'50px' }}>
      <Card.Body>
        <Card.Title>Card Title
        <h7 style={{ marginLeft:'100px'}}>8  
        <AiOutlineEye />
        </h7>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <RiDeleteBin6Line  style={{fontSize:'2rem'}}/>
        <PiNotePencilThin  style={{fontSize:'2rem' , marginLeft:'150px'}}/>
      </Card.Body>
    </Card>

    </Container>
</>
    );
    }
export default Postedjob;