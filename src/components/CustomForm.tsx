import * as React from 'react';
import { DragAndDrop } from './DragAndDrop';
import { Item } from '../utils/type/typeInterface';

interface Props extends React.CanvasHTMLAttributes<HTMLDivElement> {
    className: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
}

export const CustomForm: React.FC<Props> = ({ state, setState }) => {

    const handleDropForm = (data: string[]) => {
        setState(data);
    };

    const renderItem = (item: Item, index: number) => {
        return (
            <div className='w-full flex items-center'>
                <p className='capitalize'>{item?.label ? item?.label : '...Loading'}</p>
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
            className=''
        />
    );
};