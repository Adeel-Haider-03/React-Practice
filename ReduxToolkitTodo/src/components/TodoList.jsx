import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, completeTodo, removeTodo } from '../features/todo/TodoSlice'
import './TodoList.css'

function TodoList() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    const [editInput, setEditInput] = useState('')
    const [editId, setEditId] = useState(null)

    const editTask = (id) => {
        if (editInput.trim()) {
            dispatch(editTodo({ id, task: editInput }))
            setEditId(null)
            setEditInput('')
        }
    }

    const startEditing = (id, currentTask) => {
        setEditId(id)
        setEditInput(currentTask)
    }

    const toggleComplete = (id) => {
        dispatch(completeTodo(id))
    }

    const deleteTask = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="todo-container">
            {todos && todos.map((todo) => (
                <div className="todo-item" key={todo.id}>
                    <input
                        type="text"
                        value={editId === todo.id ? editInput : todo.task}
                        readOnly={editId !== todo.id}
                        onChange={(e) => setEditInput(e.target.value)}
                        className={todo.isCompleted ? 'completed' : ''}
                    />
                    {editId === todo.id ? (
                        <button className="save-btn" onClick={() => editTask(todo.id)}>Save</button>
                    ) : (
                        <button onClick={() => startEditing(todo.id, todo.task)}>Edit</button>
                    )}
                
                    <button onClick={() => toggleComplete(todo.id)}>
                        {todo.isCompleted ? 'Unmark as Completed' : 'Mark as Completed'}
                    </button>
                    
                    
                    <button className="delete-btn" onClick={() => deleteTask(todo.id)}>Delete</button>
                
                </div>
            ))}
        </div>
    )
}

export default TodoList
