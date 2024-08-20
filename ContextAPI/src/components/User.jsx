import React, { createContext,useContext } from 'react'
import { UserContext } from '../App'


function User() {

    const {user}=useContext(UserContext)

    if(!user){
        return <h1>Please Login</h1>
    } else{
        return (
            <div>
                
                <h1>Hello {user.username}</h1>
            </div>
          )
    }
   
}

export default User
