import * as React from 'react';
import { Mapping } from '../utils/interfaceComponents';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string
    containerProps?: React.SelectHTMLAttributes<HTMLSelectElement>
    optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>
    option?: Mapping[]
}

export const Select: React.FC<Props> = ({ className, option = [], containerProps, optionProps, ...props }) => {

    return (
        <select
            className={`bg-white text-black w-full h-10 capitalize text-sm p-2 rounded border outline-blue-400 focus:border-blue-400 ${className}`}
            {...containerProps}
            {...props}
        >
            {option.length > 0 ?
                option.map((opt: Mapping, idx: number) => (
                    <option className='text-sm capitalize text-blue-gray-900' key={idx} value={opt.value} {...optionProps}>
                        {opt?.label}
                    </option>
                ))
                : <option>No options available</option>
            }
        </select>
    )
};