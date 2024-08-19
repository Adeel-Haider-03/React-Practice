import React from 'react'
import { useParams } from 'react-router-dom'  //use to extract parameter from path

function User() {

  const {userid}=useParams();   //use to extract parameter from path
  return (
    <div className='text-center place-items-center p-4 bg-gray-600'>
      <h1 className='text-5xl'>User: {userid}</h1>
    </div>
  )
}

export default User
