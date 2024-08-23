import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'
import './TodoForm.css'

function TodoForm() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            dispatch(addTodo(input))
            setInput('')
        }
    }

    return (
        <div className="todo-form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default TodoForm
