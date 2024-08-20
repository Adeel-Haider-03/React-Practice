import { createContext,useState } from 'react';
import Login from './components/Login'
import User from './components/User'

import './App.css'

export const UserContext=createContext();

function App() {
  const [user,setUser]=useState('')

  return (
    <>
      <UserContext.Provider value={{user,setUser}} >
          <Login/>
          <User/>
      </UserContext.Provider>
    </>
  )
}

export default App
