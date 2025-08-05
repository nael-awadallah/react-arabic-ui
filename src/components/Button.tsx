import { css } from '@emotion/react';
import React from 'react';
import { theme } from '../theme';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
    const buttonStyle = css`
    padding: ${theme.spacing(2)} ${theme.spacing(4)};
    font-size: 16px;
    border: none;
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    background-color: ${variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
    color: white;
    direction: ${theme.direction};
    text-align: right;

    &:hover {
      opacity: 0.9;
    }
  `;

    return (
        <button css={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;