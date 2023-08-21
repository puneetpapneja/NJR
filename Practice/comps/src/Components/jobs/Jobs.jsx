import React from 'react'
import './jobs.css'
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from 'react-icons/ai';
import Box from './components/Box';
export default function Jobs() {
  return (
    <div>
        <h1>Jobs</h1>
        <div id='searchbar'>
        <AiOutlineSearch style={{fontSize: '2rem' }}/>
        <Form.Control className='searchbox' type="email" placeholder="Search here" />
        </div>
        <Box/>
    </div>
  )
}
