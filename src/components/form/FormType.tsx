import * as React from 'react';
import { Input } from '../Input';
import { Select } from '../Select';

interface Props extends React.HTMLAttributes<HTMLElement> {
    type: string
}

export const FormType: React.FC<Props> = ({ type, ...props }) => {

    if (type === 'input') return <Input {...props} />
    if (type === 'select') return <Select {...props} />
};