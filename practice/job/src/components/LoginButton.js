import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginForm from './Loginform'; // Create this component

const LoginButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleModalOpen}>
                Login
            </Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onClose={handleModalClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LoginButton;
