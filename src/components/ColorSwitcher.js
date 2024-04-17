import { React, useState } from 'react'

const ColorSwitcher = () => {

    const [color, setColor] = useState('')

    const handleChange = (event) => {
        setColor(event.target.value)
        document.getElementById('colored').style.backgroundColor = event.target.value
    }

    return (
        <div>
            <select name="selector" id="1" onChange={handleChange}>
                <option value="white">white</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="red">red</option>
            </select>
            <div id='colored'>
                This div will change its color
            </div>
        </div>
    )
}

export default ColorSwitcher