// Method Chaining

// Using one method after another. Order of execution will be left to right.

// str.toUpperCase().trim()

// man lo jab string pe bahot sare ek sath maethode lagane ho to ye use karte hai done 


let msg = "     Hello ";
let newMsg = msg.trim();
console.log("After print ", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after upperCase : ", newMsg);

// yaha pe hamene do alag alag methode likhe par haam chae to dono ko ek sath bbhi likh sakte hai kaise 


let newMsgs = msg.trim().toUpperCase();
// left to Right Apply hota hai 