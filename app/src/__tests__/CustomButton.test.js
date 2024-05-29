import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../components/CustomButton';
import React from 'react';

describe('CustomButton', () => {
    test('renders button with the provided text', () => {
        const text = 'Click me';
        render(<CustomButton text={text} />);

        const buttonElement = screen.getByText(text);
        expect(buttonElement).toBeInTheDocument();
    });
  
    test('applies the correct CSS class based on the type prop', () => {
        const text = 'Button';

        render(<CustomButton text={text}/>);
        const buttonText = screen.getByText(text);
        expect(buttonText).toHaveClass(`button_text`);
    });
  
    test('calls the onClick handler when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<CustomButton text="Click me" onClick={handleClick} />);

        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });



