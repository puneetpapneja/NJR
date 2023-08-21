import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., send a request to your backend)
        // After successful login, you can close the modal
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );
};

export default LoginForm;
