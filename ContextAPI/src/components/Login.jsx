import React, { useState, useContext } from 'react'
import { UserContext } from '../App';

function Login() {

    const [username,setUserName]=useState('');

    const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{     
        e.preventDefault();
        setUser({username})
    }
  return (
    <div>

      <input
        type="text"
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
    

    </div>
  )
}

export default Login
