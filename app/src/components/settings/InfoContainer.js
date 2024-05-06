import React from 'react';
import './InfoContainer.css'; // Import your CSS file for styling
import { Container } from '@mui/material';


const InfoContainer = ({title, children, fill}) => {
    return (
    <Container className="outer">
        <h2>{title}</h2>
        <Container className={fill ? "body-fill" : "body-nofill"}>
            {children}
        </Container>
    </Container>
    )
}
export default InfoContainer;