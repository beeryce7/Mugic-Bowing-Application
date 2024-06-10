import React from 'react';
import "./CustomButton.css"; 

const CustomButton = ({ onClick, text, type = 'DEFAULT' , linkTo=''}) => {
    const buttonClassName = `container container_${type}`;

    if (linkTo) {
    return (
        <button onClick={onClick} className={buttonClassName}>
            <span className="button_text">{text}</span>
        </button>
        );
    }

    return (
        <button onClick={onClick} className={buttonClassName}>
            <span className="button_text">{text}</span>
        </button>
    );
};

export default CustomButton;
