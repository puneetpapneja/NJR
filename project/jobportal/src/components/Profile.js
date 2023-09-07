// import {Form,Container,Button,Row,Col} from 'react-bootstrap';
// import { useState } from 'react';
// import { userProfile } from '../store/reducer/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
// export default function Profile(){
//         const [validated, setValidated] = useState(false);
//         const dispatch=useDispatch();
//         const [email,setEmail]= useState('');
//         const [firstName,setFirstName]= useState('');
//         const [lastName,setLastName]= useState('');
//         const [file,setFile]= useState('');
//         const existemail=useSelector(state=>state?.user?.email);
//         const id=useSelector(state=>state?.user?.id);
//         // const [message, setMessage]=useState('');
//     // const navigate=useNavigate();
//     // const data={
//     //   id:id,
//     //   firstName:firstName,
//     //   lastName:lastName,
//     //   email:email,
//     //   file:file
//     // }
//     const formData = new FormData();
//   formData.append("file", file); // Append the selected file to the form data

//   // Add other form fields to the formData object if needed
//   formData.append("id", id);
//   formData.append("firstName", firstName);
//   formData.append("lastName", lastName);
//   formData.append("email", email);
//   // console.log("cv"+formData);
//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         setValidated(true);
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         // if(validated===true){
//         //   setSession("1234");
//         //   navigate("/");
//         // }
//         else{
//             event.preventDefault();
//             event.stopPropagation();
//             dispatch(userProfile(formData));
//           }
//       }
    
//     // const onclick=()=>{
//     //   navigate("/register");
//     //   // return(
//     //   //   <Registerpage/>
//     //   // )
//     // }
    
//     return (
       
//     <Container className='mt-5 mb-5'>
//        <Row>
//        <h1 className='text-center mt-5 mb-3'>Profile</h1>
//        </Row>
//        <Form noValidate validated={validated} onSubmit={handleSubmit} enctype="multipart/form-data" >
//        <Row className='mb-3'>
//         <Form.Group controlId='formFirstName'>
//             <Form.Label>First Name</Form.Label>
//             <Form.Control type="text" required onChange={(e)=>setFirstName(e.target.value)}/>
//             <Form.Control.Feedback type="invalid">
//               Please enter your first name
//             </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         <Row className='mb-3'>
//         <Form.Group controlId='formLastName'>
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control type="text" required onChange={(e)=>setLastName(e.target.value)}/>
//             <Form.Control.Feedback type="invalid">
//               Please enter your second name
//             </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         <Row className='mb-3'>
//         <Form.Group controlId='formEmail'>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" required onChange={(e)=>setEmail(e.target.value)} value={existemail}/>
//             <Form.Control.Feedback type="invalid">
//               Please choose a email.
//             </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         <Row className='mb-3'>
//         <Form.Group controlId='formCV'>
//             <Form.Label>Resume(CV)</Form.Label>
//             <Form.Control type="file" required  onChange={(e)=>setFile(e.target.files[0])}/>
//             <Form.Control.Feedback type="invalid">
//               Please enter a file.
//             </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         <Container className='text-center'>
//         <Button className='mb-3' type="submit" variant='dark' >Submit</Button>
//         </Container>
//        </Form>
//     </Container>
//     )
// }




import {Form,Container,Button,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userProfile } from '../store/reducer/userSlice';
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
            dispatch(userProfile(formData));
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