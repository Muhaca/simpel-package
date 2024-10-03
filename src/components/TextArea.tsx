import * as React from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
    rows?: number
}

export const TextArea: React.FC<Props> = ({ className, rows = 4, ...props }) => {

    return (
        <textarea
            rows={rows}
            className={`bg-white text-black w-full capitalize text-sm px-3 py-2 rounded border outline-blue-400 focus:border-blue-400 ${className ?? ''}`}
            {...props}
        />
    );
};