import { React, useState } from 'react'

const ItemFilter = () => {

    const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape']

    const [search, setSearch] = useState('')

    const displayItem = (item) => {
        return item.toLowerCase().includes(search.toLowerCase())
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='Search Items' onChange={handleChange} />
            <ul>
                {items.filter(displayItem).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemFilter