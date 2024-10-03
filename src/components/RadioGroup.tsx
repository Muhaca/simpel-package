import * as React from 'react';
import { RadioButton } from "./RadioButton";
import { Mapping } from '../utils/interfaceComponents';

interface Props {
    options: Mapping[];
    name: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

export const RadioGroup: React.FC<Props> = ({ options, name, selectedValue, onChange }) => {
    return (
        <div>
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    label={option.label}
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={() => onChange(option.value)}
                />
            ))}
        </div>
    );
};