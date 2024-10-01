import * as React from 'react';
import { colorClasses } from '../styles/colorClasses';

type Color = keyof typeof colorClasses;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: Color;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({ color = 'primary', children, style, ...props }) => {

    return (
        <button
            style={{
                ...colorClasses[color],
                borderRadius: '5px',
                padding: '2px 5px',
                cursor: 'pointer',
                ...style
            }}
            {...props}
        >
            {children}
        </button>
    );
};