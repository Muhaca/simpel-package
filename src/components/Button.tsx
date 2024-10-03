import * as React from 'react';
import { colorClasses } from '../styles/colorClasses';

type Color = keyof typeof colorClasses;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: Color
    children?: React.ReactNode
    className?: string
}

export const Button: React.FC<Props> = ({ color = 'primary', children, className, ...props }) => {

    return (
        <button
            className={`${colorClasses[color]} w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${className ?? ''}`}
            {...props}
        >
            {children}
        </button>
    );
};