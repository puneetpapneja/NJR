import React from 'react';
import { Container } from 'react-bootstrap';

export default function Box(props) {
    return (
        <Container className='p-4 text-center'>
            <h4 className='text-white'>{props.title}</h4>
            <p className='text-white'>{props.subtitle}</p>
        </Container>
    );
}