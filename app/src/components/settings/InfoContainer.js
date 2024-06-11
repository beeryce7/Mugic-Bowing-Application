import React from 'react';
import './InfoContainer.css'; // Import your CSS file for styling
import { Container } from '@mui/material';


const InfoContainer = ({title, children, fill}) => {
    return (
    <Container className="outer">
        <div className="text-style">{title}</div>
        <Container className={fill ? "body-fill" : "body-nofill"}>
            {children}
        </Container>
    </Container>
    )
}
export default InfoContainer;