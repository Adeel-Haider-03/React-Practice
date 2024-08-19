import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //const [data,setData]=useState(0)

    const data= useLoaderData()  // used to use return of loader function

    useEffect(()=>{
        getInfo()
    },[])

  return (
    <>
      <div className='text-center place-items-center p-4 bg-gray-600'>
      <h1 className='text-5xl'>Github Followers: {data.followers}</h1>
    </div>
      <img src={data.avatar_url} alt="" />
      </>
  )
}

export default Github

async function getInfo() {      //loader function
    let response= await fetch('https://api.github.com/users/Adeel-Haider-03')

        return response.json()
}
export  {getInfo}
