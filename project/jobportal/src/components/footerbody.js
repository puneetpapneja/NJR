import Card from 'react-bootstrap/Card';
import React from 'react';
function footercontent() {
  return (
    // <Card>
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p>
    //       TM @ 2023-Techno India NJR Institute of Technology -ALl Rights Reserved
    //       </p>
    //     </blockquote>
    //   </Card.Body>
    // </Card>
    <Card bgColor='black' className='footer'>
    <div className='text-center p-4' style={{ backgroundColor: 'rgb(128,128,128)'}}>
    TM @ 2023-Techno India NJR Institute of Technology -ALl Rights Reserved
    </div>
  </Card>
  );
}



export default footercontent;