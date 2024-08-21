import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({});

  async function fetchData(){
    try {
      const url = 'https://official-joke-api.appspot.com/random_joke';

      const response = await fetch(url);
      const data= await response.json();
      console.log(data);
      setData(data);

    } catch (error) {
      console.error('Error fetching the joke:', error);
    }
  }
  
 useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <div className="app-container">
      <div className="joke-container">
        <h3>Joke Type: <span>{data.type}</span></h3>
        <h1>{data.setup}</h1>
        <h2>{data.punchline}</h2>
      </div>
      <button className="joke-button" onClick={fetchData}>Generate a Joke</button>
    </div>
    </>
  )
}

export default App
