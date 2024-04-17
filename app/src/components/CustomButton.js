import React from 'react';
import "./CustomButton.css"; 

const CustomButton = ({ onClick, text, type = 'PRIMARY' }) => {
    return (
        <button
            onClick={onClick} 
            className={`container container_${type}`} 
        >
            {text}
        </button>
    );
};

export default CustomButton;
