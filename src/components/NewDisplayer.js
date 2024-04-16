import { React, useState } from 'react'

const NewDisplayer = () => {

    const [userMessage, setUserMessage] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setUserMessage(event.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} placeholder='Enter your message'></input>
            <p>Your current message is: {userMessage}</p>
        </div>
    )
}

export default NewDisplayer