import * as React from 'react';
import { DragAndDrop } from './DragAndDrop';
import { Input } from '../Input';
import { Select } from '../Select';
import { isOption } from '../../utils/constants';
import { Item, Mapping } from '../../utils/interfaceComponents';

interface Props extends React.CanvasHTMLAttributes<HTMLDivElement> {
    className: string,
    state: any[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
    propertyOption?: Mapping[]
}

export const CustomForm: React.FC<Props> = ({ state, setState, propertyOption }) => {

    const handleDropForm = (data: string[]) => {
        setState(data);
    };

    const handleChange = (e: any, data: any, index: number) => {
        let field = { [e.target.name]: e.target.value }
        let fieldData = [...state]
        fieldData[index] = { ...fieldData[index], ...field }
        setState(fieldData)
    }

    const handleChangeOption = (e: any, data: any, index: number) => {
        let field = { [e.target.name]: e.target.value }
        let fieldData = [...state]
        fieldData[index] = { ...fieldData[index], ...field }
        setState(fieldData)
    }

    const renderItem = (item: Item, index: number) => {
        return (
            <div key={index} className='w-full flex align-middle flex-col justify-start p-2 gap-2'>
                <div>
                    <label className='capitalize text-black text-sm'>label</label>
                    <Input
                        name='label'
                        value={item?.label || ''}
                        onChange={(e) => handleChange(e, item, index)}
                    />
                </div>
                <div>
                    <label className='capitalize text-black text-sm'>property</label>
                    <Select
                        name='property'
                        value={item?.property || ''}
                        onChange={(e) => handleChange(e, item, index)}
                        option={propertyOption}
                    />
                </div>
                {isOption.some(option => option === item?.property) ?
                    !item?.option ? null : item?.option.map((el: Mapping, idx: number) => (
                        <Input
                            key={idx}
                            name='label'
                            value={el?.label || ''}
                            onChange={(e) => handleChangeOption(e, el, idx)}
                        />
                    ))
                    :
                    null
                }
            </div >
        )
    }

    return (
        <DragAndDrop
            onDrop={handleDropForm}
            itemList={state}
            draggable={renderItem}
            style={{
                borderRadius: '6px'
            }}
            className='bg-blue-gray-600'
        />
    );
};