
import { React, useState } from 'react'

const CharacterCounter = () => {

    const [characterCount, setCharacterCount] = useState(0)

    const handleChange = (event) => {
        const message_length = event.target.value.length
        setCharacterCount(message_length)
    }

    return (
        <div>
            <input type="text" placeholder='Type your message' onChange={handleChange} />
            <p>Character count: {characterCount}</p>

        </div>
    )
}

export default CharacterCounter