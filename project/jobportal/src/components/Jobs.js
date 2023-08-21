import {Form, Row, Container} from 'react-bootstrap'
import WithHeaderStyledExample from './card'
export default function Jobs(){
    return(
          <Container className='w-75 mt-5'>
            <Row>
              <Form>
                <Form.Group>
                <Form.Label><h1 className='mt-5'>Jobs</h1></Form.Label>
                <Form.Control type="text" className="form-control-lg"/>
                </Form.Group>
              </Form>
            </Row>
            <Container fluid className='mt-3 w-100 ps-0 pe-0'>
               <WithHeaderStyledExample/>
               <WithHeaderStyledExample/>
               <WithHeaderStyledExample/>
            </Container>
          </Container>
    )
}