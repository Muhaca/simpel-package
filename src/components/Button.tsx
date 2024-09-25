import * as React from 'react';

const colorClasses = {
    'primary': {
        border: '1px solid #0369a1',
        backgroundColor: '#0369a1',
        textColor: 'white'
    },
    'secondary': {
        border: '1px solid #111827',
        backgroundColor: '#111827',
        textColor: 'white',
    },
    'success': {
        border: '1px solid #22c55e',
        backgroundColor: '#22c55e',
        textColor: 'white',
    },
    'warning': {
        border: '1px solid #ea580c',
        backgroundColor: '#ea580c',
        textColor: 'white'
    },
    'error': {
        border: '1px solid #ef4444',
        backgroundColor: '#ef4444',
        textColor: 'white'
    }
} as const

type Color = keyof typeof colorClasses;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: Color;
    children: React.ReactNode;
    style: React.CSSProperties;
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