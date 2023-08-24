import React from 'react';
import { Container, Table } from 'react-bootstrap';


  


export default function Developers() {
    
    const developerData = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            contactNumber: '123-456-7890',
            appliedDate: '2023-08-10',
            resumeLink: 'Link to John\'s Resume'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            contactNumber: '987-654-3210',
            appliedDate: '2023-08-12',
            resumeLink: 'Link to Jane\'s Resume'
        },
        {
            name: 'John Doe',
            email: 'john@example.com',
            contactNumber: '123-456-7890',
            appliedDate: '2023-08-10',
            resumeLink: 'Link to John\'s Resume'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            contactNumber: '987-654-3210',
            appliedDate: '2023-08-12',
            resumeLink: 'Link to Jane\'s Resume'
        },
        {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            contactNumber: '555-123-4567',
            appliedDate: '2023-08-15',
            resumeLink: 'Link to Alice\'s Resume'
        },
        {
            name: 'Bob Williams',
            email: 'bob@example.com',
            contactNumber: '777-888-9999',
            appliedDate: '2023-08-18',
            resumeLink: 'Link to Bob\'s Resume'
        },

        
    ];
    


    return (
        <Container className='mt-4'>
            <h1 className='mb-4'>Position</h1>
            <Table striped className="mx-auto" style={{ width: '90%'}} responsive>
                <thead>   
                    <tr>
                        <th>Candidates</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Applied Date</th>
                        <th>Resume (CV)</th>
                    </tr>
                </thead>
                <tbody>
                    {developerData.map((developer, index) => (
                        <tr key={index} >
                            <td>{developer.name}</td>
                            <td>{developer.email}</td>
                            <td>{developer.contactNumber}</td>
                            <td>{developer.appliedDate}</td>
                            <td><a href={developer.resumeLink} target="_blank" rel="noopener noreferrer">File</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}