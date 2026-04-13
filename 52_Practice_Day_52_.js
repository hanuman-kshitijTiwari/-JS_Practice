// Set InterVal Function 
//setInterval() JavaScript ka ek timing function hai jo kisi function ko bar-bar (repeatedly) run karta hai after a fixed time interval.

// 🔹 Basic Syntax
//    setInterval(function, time_in_ms);

// Example 
    setInterval(() => {
        console.log("How Are u Kshitij - Tiwari");
    },1000)

// 👉 Ye har 1 second (1000 ms) me "OutPut" print karega.   

//🔹 Interval ko Stop kaise kare? (Important ⚡)
//    setInterval() ek ID return karta hai, jise use karke tum usko stop kar sakte ho using clearInterval()

let id = setInterval(() => {
    console.log("Code Is Running Right Now");
}, 1000);

// Stop after 5 second 
setTimeout(()=>{
    clearInterval(id);
    console.log("Code Stop Her");
}, 5000);

//👉 Output:
// 5 sec tak print hoga
// phir stop ho jayega


