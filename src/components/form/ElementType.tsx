import * as React from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { RadioButton } from '../RadioButton';
import { CheckBox } from '../CheckBox';

interface Props extends React.HTMLAttributes<HTMLElement> {
    type: string,
    color?: "primary" | "secondary" | "success" | "warning" | "error";
}

export const ElementType: React.FC<Props> = ({ type, ...props }) => {

    const element = {
        'single_text': <Input {...props} />,
        'number': <Input type='number' {...props} />,
        'select': <Select {...props} />,
        'button': <Button {...props} />,
        'radio': <RadioButton {...props} />,
        'checkbox': <CheckBox {...props} />
    }

    return element[type as keyof typeof element]
};