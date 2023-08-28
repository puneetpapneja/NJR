import {Form, Row, Container} from 'react-bootstrap'
import WithHeaderStyledExample from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset, searchedjob } from '../store/reducers/jobSlice'
import { useEffect, useState } from 'react';
export default function AppliedJob(){
  const [input,setInput]=useState('');
  const [inputstate, setInputstate]=useState(false);
  const dispatch=useDispatch();
  
  useEffect(
    ()=>{
      if(inputstate){
      dispatch(searchedjob({field:input}))}
      else{
        dispatch(getAllJobs());
      }
    },[inputstate, dispatch, input]
  )
  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }
  },[dispatch])

    return(
          <Container className='w-75 mt-5'>
            <Row>
              <Form>
                <Form.Group>
                <Form.Label><h1 className='mt-5'>Jobs</h1></Form.Label>
                <Form.Control type="text" className="form-control-lg" onChange={(e)=>{if(!e.target.value)setInputstate(false)}}  onKeyDown={(e)=>{
                  if(e.key==='Enter')
                  { e.preventDefault();
                    setInput(e.target.value)
                  setInputstate(true)}}}  />
                </Form.Group>
              </Form>
            </Row>
            <Container fluid className='mt-3 w-100 ps-0 pe-0'>
               <WithHeaderStyledExample/>
            </Container>
          </Container>
    )
}