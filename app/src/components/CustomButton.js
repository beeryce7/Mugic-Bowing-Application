import React from 'react';
import "./CustomButton.css"; 

const CustomButton = ({ onClick, text, type = 'DEFAULT' }) => {
    return (
        <button
            onClick={onClick} 
            className={`container container_${type}`} 
        >
            <span className="button_text">{text}</span>
        </button>
    );
};

export default CustomButton;
