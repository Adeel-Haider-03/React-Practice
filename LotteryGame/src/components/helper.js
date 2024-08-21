function sum(arr){
    return arr.reduce((prev,next)=>{
        return prev+next
    },0);
}

function genTicket(n){
    let newTicket=[];
    for (let i = 0; i < n; i++) {
        newTicket[i]=Math.floor(Math.random()*10);
    }
    return newTicket;
}
export {sum,genTicket};