import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#92A8D1',
        padding: '10px 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    };

    return (
        <footer style={footerStyle}>
            <h7>TM @ 2023 - Techno India NJR Institute of Technology - All Rights Reserved</h7>
        </footer>
    );
};

export default Footer;
