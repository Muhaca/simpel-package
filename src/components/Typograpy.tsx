import * as React from 'react';

const colorClasses = {
    'primary': 'bg-cyan-400',
    'secondary': 'bg-purple-400',
    'success': 'bg-green-400',
    'warning': 'bg-orange-400',
    'error': 'bg-red-400'
} as const

type Color = keyof typeof colorClasses;

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
    color?: Color;
    children: React.ReactNode;
    style: React.CSSProperties;
    className: string
}

export const Typograpy: React.FC<Props> = ({ color = 'primary', children, className, style, ...props }) => {

    return (
        <p
            className={`w-full border rounded-sm bg-slate-400 ${colorClasses[color]} ${className}`}
            {...props}
        >
            {children}
        </p>
    );
};