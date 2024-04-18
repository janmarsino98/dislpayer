import { React, useState } from 'react'

const DaragAndDrop = () => {

    const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Imbe", "Jackfruit"])
    const [draggedItemIndex, setDraggedItemIndex] = useState(null)

    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, index) => {
        event.preventDefault();
        const itemToMove = items[draggedItemIndex];
        const remainingItems = items.filter((_, i) => i !== draggedItemIndex);
        const newItems = [
            ...remainingItems.slice(0, index),
            itemToMove,
            ...remainingItems.slice(index)
        ];
        setItems(newItems);
        setDraggedItemIndex(null)
    }
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} draggable onDragStart={() => handleDragStart(index)} onDragOver={handleDragOver} onDrop={() => handleDrop(index)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DaragAndDrop