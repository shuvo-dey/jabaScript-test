/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const ticketPrice = 800;
let age = 25;
let student=true;

if(age<10){
    console.log("Free Ticket");
}
else if(student===true) {

    console.log("Ticket Price (Discount 50%): " + (ticketPrice - ticketPrice *50 / 100));
}
else if (age>=60) { 
    console.log("Ticket Price (Discount 50%): "+ (ticketPrice - ticketPrice * 15 / 100));
}
else{
    console.log("Regular Ticket Price: "+ ticketPrice);
}