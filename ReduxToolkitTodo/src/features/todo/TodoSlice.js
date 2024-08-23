import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState={
    //emptyTodo
    todos:[]
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo(state,action){
            const todo={
                id:nanoid(),
                task:action.payload,
                isCompleted:false,
            }
            state.todos.push(todo)
        },
        removeTodo(state,action){
            state.todos=state.todos.filter((todo)=>{
                return todo.id!==action.payload
            })
        },
        editTodo(state,action){
            const {id,task}=action.payload
            const existingTodo=state.todos.find((todo)=>todo.id===id)
            if(existingTodo){
                existingTodo.task=task
            }
        },
        completeTodo(state,action){
            const todo=state.todos.find(todo=>todo.id===action.payload)
            if(todo){
                todo.isCompleted=!todo.isCompleted
            }        
        },

    }
})

export const {addTodo,removeTodo,editTodo,completeTodo} =todoSlice.actions
export default todoSlice.reducer