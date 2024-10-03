import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input: React.FC<Props> = ({ className, ...props }) => {

    return (
        <input
            className={`bg-white text-black w-full h-10 capitalize text-sm px-3 py-2 rounded border outline-blue-400 focus:border-blue-400 ${className ?? ''}`}
            {...props}
        />
    );
};