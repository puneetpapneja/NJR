import React, { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import { useSelector } from 'react-redux';

const Notification = () => {
    const {variant, heading, message } = useSelector(state => state?.notification);
   const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("enter into notification useEffect", message);
        setShow(!!message); // This will set show to true if message exists
    }, [message]);

    return (<Toast
    className="d-inline-block m-1"
    bg={variant}
    key="key_variant"
    show={show}
    onClose={() => setShow(false)}
  >
    <Toast.Header>
      <strong className="me-auto">{heading}</strong>
    </Toast.Header>
    <Toast.Body className={variant === 'Dark' && 'text-white'}>
     {message}
    </Toast.Body>
  </Toast>);
}

export default Notification;