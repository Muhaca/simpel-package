import * as React from 'react';
import { DragAndDrop } from './DragAndDrop';

interface Item {
    label: string;
    property: string;
}

interface Props extends React.CanvasHTMLAttributes<HTMLDivElement> {
    className: string,
    state: Item[],
    setState: React.Dispatch<React.SetStateAction<Item[]>>
}

export const CustomForm: React.FC<Props> = ({ state, setState }) => {

    const handleDropForm = (data: Item[]) => {
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