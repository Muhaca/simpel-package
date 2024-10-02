import * as React from 'react';
import { DragAndDrop } from './DragAndDrop';
import { Input } from '../Input';
import { Select } from '../Select';
import { isOption } from '../../utils/constants';
import { Item, Mapping } from '../../utils/interfaceComponents';
import { Button } from '../Button';

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

    const handleChange = (e: any, index: number) => {
        let field = { [e.target.name]: e.target.value, option: null }
        let fieldData = [...state]
        fieldData[index] = { ...fieldData[index], ...field }
        setState(fieldData)
    }

    const handleAddOption = (index: number) => {
        let fieldData = [...state]
        let newOption: Mapping = { value: '', label: '' };
        fieldData[index] = { ...fieldData[index], option: [...fieldData[index].option || [], newOption] }
        setState(fieldData)
    }

    const handleChangeOption = (e: any, index: number, idx: number) => {
        let field = { [e.target.name]: e.target.value }
        let fieldData = [...state]
        fieldData[index].option[idx] = { ...fieldData[index].option[idx], ...field }
        setState(fieldData)
    }

    const handleDeleteOption = (index: number, idx: number) => {
        let fieldData = [...state]
        let length = 0
        let option = fieldData[index]?.option
        if (option) length = fieldData[index]?.option?.length
        if (length > 1) {
            option = [
                ...option.slice(0, idx),
                ...option.slice(idx + 1)
            ]
        }
        fieldData[index].option = option
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
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                <div>
                    <label className='capitalize text-black text-sm'>property</label>
                    <Select
                        name='property'
                        value={item?.property || ''}
                        onChange={(e) => handleChange(e, index)}
                        option={propertyOption}
                    />
                </div>
                {isOption.some(option => option === item?.property) ?
                    <div className='flex flex-col gap-2'>
                        {!item?.option ? null : item?.option.map((el: Mapping, idx: number) => (
                            <div key={idx}>
                                <label className='capitalize text-black text-sm'>{`option ${idx + 1}`}</label>
                                <Input
                                    name='label'
                                    value={el?.label || ''}
                                    onChange={(e) => handleChangeOption(e, index, idx)}
                                />

                                <Button color='error' onClick={() => handleDeleteOption(index, idx)} className='text-white'>
                                    Delete Option
                                </Button>
                            </div>
                        ))}
                        <div>
                            <Button onClick={() => handleAddOption(index)} className='text-white'>
                                Add Option
                            </Button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
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