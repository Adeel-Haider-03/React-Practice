import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);

 const increment=()=>{
    if(count<20){
      setCount((count)=>count+1)
    }  
  };

  const decrement=()=>{
    if(count>0){
      setCount((count)=>count-1)
    }
  };

  return (
    <>
  <div>
    <h1>Counter :{count}</h1>
      <button onClick={increment}>Increment counter </button>
      <button onClick={decrement}>decrement counter </button>
      </div>
    </>
  )
}

export default App
