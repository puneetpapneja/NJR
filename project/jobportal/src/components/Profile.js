import React, { useState } from 'react';
import { Container, Form, Button, Toast } from 'react-bootstrap';

export default function Profile() {
  const [showToast, setShowToast] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a delay for submission
    setTimeout(() => {
      setShowToast(true);
    }, 1000);
  };

  const handleFileChange = (e) => {
    // Update the resumeFile state with the selected file
    const selectedFile = e.target.files[0];
    setResumeFile(selectedFile);

    // Read and preview the selected file
    const reader = new FileReader();
    reader.onload = (e) => {
      setResumePreview(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleView = () => {
    if (resumePreview) {
      // Open the preview in a new tab
      window.open(resumePreview);
    } else {
      alert('No resume file uploaded!');
    }
  };

  return (
    <div>
      <Container className='mt-4'>
        <h1 className='mb-4' style={{ marginLeft: '17vw' }}>
          Profile
        </h1>
        <Form className='mx-auto' style={{ width: '40%' }} onSubmit={handleSubmit}>
          <Form.Group controlId='firstName' className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your first name' />
          </Form.Group>

          <Form.Group controlId='lastName' className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your last name' />
          </Form.Group>

          <Form.Group controlId='email' className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter your email' />
          </Form.Group>

          <Form.Group controlId='resume' className='mb-3'>
            <Form.Label>Resume (CV)</Form.Label>
            <Form.Control type='file' onChange={handleFileChange} />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button type='submit' style={{ backgroundColor: 'black', border: 'none' }}>
              Submit
            </Button>
            {resumeFile && (
              <Button
                type='button'
                style={{ backgroundColor: 'black', border: 'none', marginLeft: '10px' }}
                onClick={handleView}
              >
                View
              </Button>
            )}
          </div>
        </Form>
        {resumePreview && (
          <div className='mt-3'>
            <h5>Resume Preview</h5>
            <img src={resumePreview} alt='Resume Preview' style={{ maxWidth: '100%' }} />
          </div>
        )}
      </Container>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
        }}
        delay={3000}
        autohide
      >
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>
    </div>
  );
}
