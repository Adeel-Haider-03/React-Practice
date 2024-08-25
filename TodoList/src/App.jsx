import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  let [todos,setTodos] = useState([])
  let [newtodoValue,setnewTodoValue]=useState("")


  function AddTask(){
    if (newtodoValue.trim() === "") return; // Prevent empty tasks
    setTodos((prevTodo)=>{
     return [...prevTodo,{task:newtodoValue,id:uuidv4(),isDone:false}]
    })
    setnewTodoValue("") // Clear input field after adding a task
  }

  function deleteTask(id){
    setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id!==id))
  }

  function TaskDone(id){
    setTodos((prevTodo)=>{
      return prevTodo.map((todo)=>{
        if(todo.id===id){
          return {...todo,isDone:!todo.isDone};
        }
        else{
          return todo;
        }
      })
    })
  }
  return(
    <div className='container'>
      <h1>TodoList</h1>
      <div className='inputBox'>
      <input
      type="text"
      placeholder='Add a Task'
      value={newtodoValue}
      onChange={(e)=>{
        setnewTodoValue(e.target.value)
      }}
      />
      <button className='add' onClick={AddTask}>ADD</button>
      </div>
        <h2>Todo Tasks</h2>
      <ul>

       { todos.map((task)=>{      //or we can write in one line  {todo.map((task)=><li>{task}</li>)}
      return <li key={task.id} >
        <span style={{textDecoration:task.isDone?'line-through':'none'}}>
        {task.task}</span>
        <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
        <button onClick={()=>{TaskDone(task.id)}}>{task.isDone ? 'Undo' : 'Mark as Done'}</button>
        
      
      </li> })}

      </ul>
    </div>
  )
}

export default App
