import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { useState } from 'react';
import { useSelector } from 'react-redux';
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05



 const Login = () => {
<<<<<<< HEAD
=======
    const[email,setemail]=useState()
    const[pwd,setPwd]=useState()
    const userDtl=useSelector(state =>state.getuser.user)
    const {emailID}=userDtl
    const handleClick=()=>{
        console.log(emailID)
    }
   
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
    return (
        <Container className='w-25'>
            <Row>
                <Col className='text-center'><h1>Login </h1></Col>
            </Row>
            <Row>
                <Col md="12">
                    <InputGroup className="mb-3">
<<<<<<< HEAD
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
=======
                        <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
<<<<<<< HEAD
=======
                            onChange={(event)=>setemail(event.target.value)}
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
<<<<<<< HEAD
=======
                        onChange={(event)=>setPwd(event.target.value)}
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Col>
            </Row>
            <Row className='text-center'>
                <Link to="/Registerpage">Donot have account? Register</Link>
            </Row>
            <Row >
                <Col className='text-center'> 
<<<<<<< HEAD
                    <Button variant="outline-success">Submit</Button>
=======
                    <Button variant="outline-success" onClick={handleClick}>Submit</Button>
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
                </Col>
            </Row>
        </Container>
    )
}
export default Login