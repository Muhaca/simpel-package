import * as React from 'react';

interface Item {
    label: string;
    property: string;
}

interface DragAndDropProps {
    onDrop: (updatedItems: Item[]) => void;
    itemList: Item[];
    draggable: (item: Item, index: number) => React.ReactNode;
    style?: React.CSSProperties;
    className: string,
    disabled?: boolean;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop, itemList, draggable, style, disabled = false, className, ...props }) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
        e.dataTransfer.setData('position', position.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, newIndex: number) => {
        const newPosition = Number(e.dataTransfer.getData('position'));
        const remainingItems = itemList.filter((_, index) => index !== newPosition);

        const updatedItems = [
            ...remainingItems.slice(0, newIndex),
            itemList[newPosition],
            ...remainingItems.slice(newIndex)
        ];
        onDrop(updatedItems);
    };

    return (
        itemList.length > 0 ? itemList.map((item, index) => (
            <div
                key={index}
                className={`w-full flex items-center gap-1 bg-slate-900 border rounded p-2 hover:bg-[e0e0e0] hover:cursor-move active:cursor-grabbing bg-[e0e0e0] ${className}`}
                draggable={!disabled}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                {...props}
            >
                {draggable(item, index)}
                <svg
                    fill="none"
                    height="15"
                    viewBox="0 0 15 15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        clipRule="evenodd"
                        d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                        fill="currentColor"
                        fillRule="evenodd" />
                </svg>
            </div>
        )) : null
    )
};