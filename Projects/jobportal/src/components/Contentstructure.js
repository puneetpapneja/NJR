import React from 'react';
import {Container} from 'react-bootstrap'
export default function ContentStructure(example){
    return(
        <Container className='p-4'>
            <h4 className='text-center text-white'>{example.title}</h4>
            <p className='text-center text-white'>{example.subtitle}</p>
        </Container>
    );
}