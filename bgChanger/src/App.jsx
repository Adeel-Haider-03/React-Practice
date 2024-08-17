import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className='h-screen w-full' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}>
          Red
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}}
         onClick={()=>setColor("blue")}>
          Blue
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}
         onClick={()=>setColor("green")}>
          Green
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Pink"}}
         onClick={()=>setColor("pink")}>
          Pink
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Brown"}}
         onClick={()=>setColor("brown")}>
          Brown
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Orange"}}
         onClick={()=>setColor("orange")}>
          Orange
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Magenta"}}
         onClick={()=>setColor("magenta")}>
          Magenta
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Olive"}}
        onClick={()=>setColor("Olive")}>
          Olive
        </button>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Purple"}}
        onClick={()=>setColor("purple")}>
          Purple
        </button>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
