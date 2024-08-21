import { useState } from "react";
import Ticket from "./Ticket"
import {sum,genTicket} from "./helper"


function Lottery({ticketSize,winCondition}) { 

    let [ticket,setTicket]=useState(genTicket(ticketSize));
    let isWinning=winCondition(ticket);

    
    let buyTicket=()=>{
        let newTicket=genTicket(ticketSize);
        setTicket(newTicket)
        console.log(sum(ticket))
    }
    return(
        <>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>

        <button onClick={buyTicket}>Buy Ticket</button>

        <h3>{isWinning && "Congrats, You have won Lottery!"}</h3>

        </>
    
    )

}


export default Lottery