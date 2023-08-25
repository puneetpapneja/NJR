

import {Form,Container,Button,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
export default function Profile(){
        const [validated, setValidated] = useState(false);
    // const navigate=useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        // if(validated===true){
        //   setSession("1234");
        //   navigate("/");
        // }
    }
    // const onclick=()=>{
    //   navigate("/register");
    //   // return(
    //   //   <Registerpage/>
    //   // )
    // }
    
    return (
       
    <Container className='mt-5' >
       <Row>
       <h1 className='text-center mt-5 mb-3'>Profile</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className='mb-3'>
        <Form.Group controlId='formFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formLastName'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Resume(CV)</Form.Label>
            <Form.Control type="file" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Submit</Button>
        </Container>
       </Form>
    </Container>
    )
}