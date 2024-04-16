import { React, useState } from 'react'

const ToggleVisibility = () => {

    const [isVisible, setVisibility] = useState(true)

    const handleClick = () => {
        console.log(isVisible)
        setVisibility(!isVisible)
    }

    return (
        <div>
            {isVisible && <p>This is the element that changes its visibiliy!</p>}
            <button onClick={handleClick}>Toggle visibility</button>
        </div>
    )
}

export default ToggleVisibility