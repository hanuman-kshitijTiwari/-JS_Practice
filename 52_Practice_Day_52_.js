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


// 🔹 Real Life Use Cases 💡
// ⏰ Clock banana
// 🔄 Auto refresh
// 🎮 Game loop
// 📊 Live data update
// ⏳ Timer / countdown


// Example: 
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(count);

    if(count == 10){
        clearInterval(timer);
    }
},10000)

//👉 Ye 1 se 10 tak count karega, fir stop
//🔹 setInterval vs setTimeout
// | Feature  | setInterval | setTimeout  |
// | -------- | ----------- | ----------- |
// | Run      | Repeat      | Sirf 1 baar |
// | Use case | Loop work   | Delay work  |


//🔹 Important Notes ⚠️
// Ye asynchronous hota hai
// Exact timing guarantee nahi hoti (browser load pe depend karta hai)
// Zyada use karoge to performance issue aa sakta hai


//🔹 Pro Tip 🚀
//    Kabhi-kabhi better hota hai setInterval ki jagah setTimeout loop use karo:

function repeat(){
    console.log("Smart Loop");

    setTimeout(repeat, 1000);
}
repeat();
//👉 Isme tum control better kar sakte ho (no overlap issue)


// Exercise :
// ⏰ Digital clock project
// 🎯 Countdown timer
// 🎮 Game loop example
 // banao 