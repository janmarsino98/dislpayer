import { clear } from '@testing-library/user-event/dist/clear'
import { React, useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
            clearInput()
        }
    }

    const clearInput = () => {
        document.querySelector('input').value = ''
    }

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove))
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div>
                <h4> Add a new task: </h4>
                <input type="text" placeholder='New task name' onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task} <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList