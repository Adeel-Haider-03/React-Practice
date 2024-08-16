import { Card } from '../components/card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl font-bold underline mb-4'>Hello World</h1>
      <Card BtnText='View'/>
      <Card username='Abella' BtnText='Submit'/>
      
    </>
  )
}

export default App
