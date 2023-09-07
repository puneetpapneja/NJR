// import {Form,Button,Container,Row, Alert, Col} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateProfile } from '../store/reducers/userSlice';

// export default function Profile(){
//     const [firstName,setFirstName]=useState("");
//     const [lastName,setLastName] = useState("");
//     const [firstNameError,setFirstNameError] = useState("");
//     const [lastNameError,setLastNameError]= useState("");
//     const [file,setFile] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const id = useSelector(state=>state?.user?._id);
//     const email = useSelector(state=>state?.user?.emailId)
//     const err = useSelector(state=>state?.user?.Error);
//     const Handleclick = (event)=>{
//         if(!firstName)
//         {
//             event.preventDefault();
//             setFirstNameError("*required");
//             return;
//         }
//         if(!lastName)
//         {
//             event.preventDefault();
//             setLastNameError("*required");
//             return;
//         }
//         const formData =new FormData();
//         formData.append("id",id)
//         formData.append("firstName",firstName)
//         formData.append("lastName",lastName)
//         formData.append("file",file)
//         console.log("sent",formData);
//         dispatch(updateProfile(formData));
//         if(!err)
//         {
//             navigate("/");
//         }
//     }
//     return(
//         <Container>
//             <Form as={Col} sm="12" md="5" className='mx-auto' encType='multipart/form-data'>
//                 <Row>
//                     <h1 className='my-3'>Profile</h1>
//                 </Row>
//                 <Row>
//                     <Form.Group>
//                         <Form.Label className='my-3'>First Name</Form.Label>
//                         <br />
//                         <Form.Control 
//                             type='text' 
//                             value={firstName}
//                             onChange={(e)=>{
//                                                 setFirstName(e.target.value);
//                                                 setFirstNameError("");
//                                             }
//                                     }
//                             className='mb-3'
//                         />
//                         {firstNameError && <Alert variant='danger'>{firstNameError}</Alert>}
//                     </Form.Group>
//                 </Row>
//                 <Row>
//                     <Form.Group>
//                         <Form.Label className='my-3'>Last Name</Form.Label>
//                         <br />
//                         <Form.Control 
//                             type='text'
//                             value={lastName} 
//                             onChange={(e)=>{
//                                     setLastName(e.target.value);
//                                     setLastNameError("");
//                                         }
//                             }
//                         />
//                         {lastNameError && <Alert variant='danger'>{lastNameError}</Alert>}
//                     </Form.Group>
//                 </Row>
//                 <Row>
//                     <Form.Group>
//                         <Form.Label className='my-3'>Registered Email Address</Form.Label>
//                         <br />
//                         <Form.Control 
//                             disabled
//                             type='text' 
//                             value={email}
//                             className='mb-3'
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row>
//                     <Form.Group>
//                     <Form.Label className='my-3'>Choose CV</Form.Label>
//                     <Form.Control type='file'
//                         onChange={(e)=>{
//                             setFile(e.target.files)
//                         }}
//                     />
//                     </Form.Group>
//                 </Row>
//                 <Row>
//                     <Button type='submit' variant='dark' onClick={Handleclick} className='my-5'>Submit</Button>
//                 </Row>
//             </Form>
//         </Container>
//     );
// }

// --------------------------second attempt--------------------------------------------------------------------------------

import {Form,Container,Button,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../store/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Profile(){
        const [validated, setValidated] = useState(false);
        const dispatch=useDispatch();
        const navigate = useNavigate();
        const [firstName,setFirstName]= useState('');
        const [lastName,setLastName]= useState('');
        const [file,setFile]= useState('');
        const emailId=useSelector(state=>state?.user?.emailId);
        const id=useSelector(state=>state?.user?._id);
        const err = useSelector(state=>state?.user?.Error);
        const formData = new FormData();
        formData.append("file", file); 
        formData.append("id", id);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        // console.log("sent",formData);
        const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            dispatch(updateProfile(formData));
            if(!err){
                navigate("/")
            }
          }
      }    
    return (
       
    <Container className='mt-5 mb-5'>
       <Row>
       <h1 className='text-center mt-3 mb-3'>Profile</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit} enctype="multipart/form-data" >
       <Row className='mb-3'>
        <Form.Group controlId='formFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" required onChange={(e)=>setFirstName(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
              Please enter your first name
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" required onChange={(e)=>setLastName(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
              Please enter your second name
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" disabled value={emailId}/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formCV'>
            <Form.Label>Choose CV file</Form.Label>
            <Form.Control type="file" required  onChange={(e)=>setFile(e.target.files[0])}/>
            <Form.Control.Feedback type="invalid">
              Please enter a file.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Container className='text-center'>
        <Button className='mb-3' type="submit" variant='dark' >Submit</Button>
        </Container>
       </Form>
    </Container>
    )
}