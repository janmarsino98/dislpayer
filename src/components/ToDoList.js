import { React, useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }

    const handleChange = (event) => {
        setNewTask(event.target.value)
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
                    return <li key={index}>{task}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList