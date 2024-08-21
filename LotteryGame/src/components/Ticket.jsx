import TicketNum from "./TicketNum"

function Ticket({ticket}) {

    return(
        <>
        <h2>Ticket</h2>
        <div className="ticket-container">
            {ticket.map((num,idx)=>{
            return  <TicketNum key={idx} num={num}/>
            })}
        </div>
        

        </>
        
    )
}
export default Ticket