import { css } from '@emotion/react';
import React from 'react';
import { theme } from '../theme';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const cardStyle = css`
    border: 1px solid #ddd;
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacing(4)};
    background-color: ${theme.colors.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    direction: ${theme.direction};
    text-align: right;
    max-width: 400px;
    margin: ${theme.spacing(2)} 0;
  `;

    return <div css={cardStyle}>{children}</div>;
};

export default Card;