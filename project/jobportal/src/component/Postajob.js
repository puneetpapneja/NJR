import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { postJob } from '../store/reducers/jobSlice';

function Postajob(){
    const [data , setdata]=useState("");
    const dispatch=useDispatch();
  function handlechange(e){
          setdata({...data ,[e.target.name]:e.target.value});
  }
console.log(data);
  
function handleSubmit(){
  dispatch(postJob(data));

}
    return ( <Container className='postdiv'>     
       <h1>Post a job</h1>
    <Form className='my-3 ' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" name="JobTitle" onChange={handlechange} />
        <Form.Label>Job description</Form.Label>
        <Form.Control type="text" name="description" onChange={handlechange} />
        <Form.Label>Max salary</Form.Label>
        <Form.Control type="text" name="maxSalary" onChange={handlechange} />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  );
}



export default Postajob;