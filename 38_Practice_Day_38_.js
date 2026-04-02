// Function : Function is The Important Concept In Js 
// For Example : console.log() , arr.push() etc are called Functions 
// Matlb Jinke Samne Ye () esa dabba Lag Jaye TO samjha jao Ki Ye Function hai 


// Sysntax of Function In JS 

function function_Name() {
    // Your Logic , Your Code What you Want to Impleemnt here Bro 
}

// After Function Creation We Call It But How I can Show u 
// Calling Syntax

function_Name(); 
//1- Eske Andhr Prameter bhi dale Ja Sakte hai 
//2- Without pramenter bhi chalta hai 
//3- Ek Se jada Parameter bhi ho sakte hai 

// !- Example For Creating One Full Fuction FRom Creation to Calling 

function helo(){
    console.log("This Is My First Function");
}
helo();
helo();
helo();
helo();
helo();


// Example 2;
function printName() {
    console.log("Kshitij-Tiwari");
    console.log("Auysh-Tiwari");
    console.log("Aman-Tiwari");
    console.log("Koi Mill gaya -Tiwari");
}

printName();
printName();
printName();


function isAdult() {
    let age = 18;
    if(age>=18){
        console.log("ADULT");
    }
    else{
        console.log("NOT ADULT");
    }
}
 isAdult();
