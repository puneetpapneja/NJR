import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
        <h1>Post A Job</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Job Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Max Salary</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Button variant="dark">Dark</Button>
    </Form>
  );
}

export default TextControlsExample;