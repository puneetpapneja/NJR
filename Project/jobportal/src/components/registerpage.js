import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [jobSeeker, setJobSeeker] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      alert("Please enter all of the required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("The passwords do not match.");
      return;
    }

  };

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Checkbox name="jobSeeker" checked={jobSeeker} onChange={(e) => setJobSeeker(e.target.checked)}>Job Seeker</Checkbox>
          </Col>
          <Col>
            <Checkbox name="jobRecruiter" checked={!jobSeeker} onChange={(e) => setJobSeeker(e.target.checked)}>Job Recruiter</Checkbox>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Button type="submit">Register</Button>
          </Col>
        </Row>
      </Form>
      <p>
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
};

export default Registerpage;
