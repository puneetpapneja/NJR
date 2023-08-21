import React from 'react';
import { Table } from 'react-bootstrap';

const BorderlessTable = () => {
  return (
    <>
    <h1 className='container'>senior Developer(4587)</h1>
    <br/>
    <Table borderless className='container'>
      <thead>
        <tr>
          <th>Candidates</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Applied Date</th>
          <th>Resume(CV)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arjun Puri</td>
          <td>ArjunPuri1991@gmial.com</td>
          <td>8619624940</td>
          <td>12/Aug/2000</td>
          <td>File</td>
        </tr>
        <br/>
        <tr>
        <td>Arjun Puri</td>
          <td>ArjunPuri1991@gmial.com</td>
          <td>8619624940</td>
          <td>12/Aug/2000</td>
          <td>File</td>
        </tr>
        <br/>
        <tr>
        <td>Arjun Puri</td>
          <td>ArjunPuri1991@gmial.com</td>
          <td>8619624940</td>
          <td>12/Aug/2000</td>
          <td>File</td>
        </tr>
        <br/>
        <tr>
        <td>Arjun Puri</td>
          <td>ArjunPuri1991@gmial.com</td>
          <td>8619624940</td>
          <td>12/Aug/2000</td>
          <td>File</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default BorderlessTable;
