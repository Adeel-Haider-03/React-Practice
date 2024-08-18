import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
    let [length,setLength]=useState(8);
    let [isNumberChecked,setNumberIsChecked]=useState(false);
    let [isSymbolChecked,setSymbolIsChecked]=useState(false);
    let [password,setPassword]=useState("");

    let passwordGenerator=useCallback(()=>{   //usecallback is sued to memeorize the function, store fn in cache
      let numbers="0123456789";
      let symbols="!@#$%^&*()-_=+[]{}|;:',.<>?/~`"
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let password ="";

      if(isNumberChecked) str+=numbers;
      if(isSymbolChecked) str+=symbols;

      for (let index = 1; index <= length; index++) {   //from 1 bcoz 0 isn't genrated from rand no at all
        let char=Math.floor(Math.random()*str.length+1);  // +1 mean no zero
        password+=str.charAt(char);
        
      }

      setPassword(password)
    },[length,isNumberChecked,isSymbolChecked,setPassword])

    useEffect(()=>{            //when page is load for first time it is caleed or whenever any change in depndancy 
      passwordGenerator()
    },[length,isNumberChecked,isSymbolChecked,passwordGenerator])

    let passwordRef=useRef(null)   //use to take ref of any element on page

    let copyPasswordToClipBoard= useCallback(()=>{
      passwordRef.current?.select();                 //used to highlight selected text
      passwordRef.current?.setSelectionRange(0,999)   //if we give 0,20 then it will highlight only first 20 no matter what length is
      navigator.clipboard.writeText(password)
    },[password])
      

  return (
    <>
         <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-10 my-10 bg-slate-600 text-white ">
      <h1 className='text-white text-center my-6 text-xl'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4" >
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-pink-400"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button className='outline-none bg bg-pink-400 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}>copy
        </button>
        
    </div>
    <div className='flex text-sm gap-x-2 gap-y-4 flex-col'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={isNumberChecked}
          onChange={()=>{
            setNumberIsChecked((prev)=>!prev)}
          }
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked={isSymbolChecked}
              onChange={()=>{
                setSymbolIsChecked((prev)=>!prev)}
              }
          />
          <label htmlFor="characterInput">Symbols</label>
      </div>
    </div>
</div>
      
    </>
  )
}
export default App
