import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import { useState } from "react";
import { useDispatch} from 'react-redux';
import { profile } from '../store/reducers/userSlice';

function Profile(){
  const emailId=useSelector(state=>state?.user?.emailId);
 const dispatch=useDispatch();

const [data ,setdata]=useState( {textData: "",
file: null,
emailId:emailId
}
);
const formdata = new FormData();
  function handlechange(e){
      const {name , value}=e.target;
      
    setdata({
      ...data,
     [name]:value})
  
    
  } 
  function handlefilechange(e){
      const file=e.target.files[0];
    setdata({ 
      ...data,
      file})
  
    
  } 

console.log(data);
  function handleSubmit(){
 const form=new FormData();
  form.append("mydata",data.textData);
  form.append("myfile",data.file);
console.log(form);
 dispatch(profile(data));
  }

  
// console.log(formdata);
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const formDataToSend = new FormData();

//     // Append form values to the FormData object
//     Object.entries(data).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });
//     console.log(formDataToSend);
//   }
  
    return ( <Container className='postdiv'>     
       <h1>Profile</h1>
    <Form className='my-3 ' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" onChange={handlechange} />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  name="lastName" onChange={handlechange} />
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email" name='emailId' value={emailId}  disabled />
        <Form.Label>Resume(CV)</Form.Label>
        <Form.Control type="file" name='file' onChange={handlefilechange} />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>

  );
}



export default Profile;