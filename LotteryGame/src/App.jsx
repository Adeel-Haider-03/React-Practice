import './App.css'
import Lottery from './components/Lottery'
import { sum } from './components/helper'
import lotteryImage from './assets/1000_F_314846244_glBlZbpKXN0Tr15achus6IPR1m7xR8lx.jpg';


function App() {

  let winCondition=(ticket)=>{
    return sum(ticket)===15;
  }

  return (
    <>
    <img src={lotteryImage} alt="img" />
    <div className='lottery'>
    <div className='win'>WinCondition : <span>Sum = 15</span></div>
    <Lottery ticketSize={3} winCondition={winCondition}/>

    </div>
    </>
  )
}

export default App
