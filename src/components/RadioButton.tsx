import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean,
    label?: string
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    containerProps?: React.HTMLAttributes<HTMLDivElement>
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
}

export const RadioButton: React.FC<Props> = ({ checked = false, label = '', name = '', onChange, containerProps, inputProps, labelProps, ...props }) => {

    return (
        <div className={`flex items-center mb-4 ${containerProps?.className ?? ''}`} {...containerProps}>
            <input onChange={onChange} type="radio" checked={checked} name={name} className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ${inputProps?.className ?? ''}`} {...inputProps} {...props} />
            <label className={`ms-2 text-sm font-medium text-gray-900 ${labelProps?.className ?? ''}`} {...labelProps}>{label}</label>
        </div>
    );
};