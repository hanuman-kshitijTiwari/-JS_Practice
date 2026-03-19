// So Today Is Day 3 Now We Can Understant About More Basics Of JS
// What is The Use Of Console.log
//..So console.log print the Output 

console.log("Hey Hi JS how Are You I think I miss You Js please Come on Js Come");

// In Console  We Can May Things Not About printing Output 

// Variable
let x = 10;
let y = 20;

// 1. Simple print
console.log("Simple value:", x);

// 2. Multiple values/Ya Fhir variables print kar sakte hai 
console.log("Multiple:", x, y);

// 3. Text + variable
console.log("Sum is:", x + y);

// 4. Object & Array
let user = { name: "Kshitij", age: 20 };     // this the Our Object 
let arr = [1, 2, 3];                         // this is  the Our array
console.log("Object:", user);
console.log("Array:", arr);
console.log("Array:", arr, "Object:", user);

// 5. Debugging (flow check)
console.log("Code start hua");

// 6. Formatted output
console.log("Number: %d, String: %s", x, "Hello");

// 7. Styling
console.log("%cStyled Text", "color: blue; font-size: 16px;");

// 8. Error & Warning
console.error("Ye ek error hai ❌");
console.warn("Ye warning hai ⚠️");

// 9. Time measure
console.time("Loop Time");
for (let i = 0; i < 3; i++) {
    console.log("Loop i:", i);
}
console.timeEnd("Loop Time");

// 10. Condition tracking
if (x > 5) {
    console.log("x bada hai 5 se");
}

console.log("Code end hua");



// 🔥 console.log() vs console.error()
// Purpose:
// console.log() → general info / debugging
// console.error() → specifically error batane ke liye

// Use console.log() for normal output,
// Use console.error() to clearly show errors 🚨

// Output Style:
// console.log() → Normal text in console
// console.error() → Highlighted in red (easier to notice)


//Different types of console methods in JavaScript

//1:🟢  Basic Output:
//       console.log() → prints normal messages
//       console.info() → informational message (similar to log)


//2:🟡  Warning & Error: 
//       console.warn() → shows warning (yellow)
//       console.error() → shows error (red 🚨)

//3-🔵  Debugging
//       console.debug() → debug-level messages
//       console.trace() → shows function call stack


// 🟣   Table & Structure
//       console.table() → displays data in table format

// 🟠   Grouping Logs
//       console.group() → groups logs together
//       console.groupEnd() → ends the group


// ⏱️ Time Measurement
//      console.time() → starts timer
//      console.timeEnd() → ends timer

// 🧹 Cleaning
//      console.clear() → clears the console

// 🎯 Counting
//      console.count() → counts how many times it is called





// Console Methods List

// console.log()
// console.info()
// console.warn()
// console.error()
// console.debug()
// console.trace()
// console.table()
// console.group()
// console.groupEnd()
// console.time()
// console.timeEnd()
// console.clear()
// console.count()


//console.dir() → shows object properties (useful for DOM)
//console.dir() → shows object properties (useful for DOM)
//console.groupCollapsed() → same as group but collapsed by default
//console.countReset() → resets the counter
//console.timeLog() → shows intermediate time
    console.time("test");
    console.timeLog("test");
    console.timeEnd("test");

//console.memory → shows memory usage (browser dependent)

//Profile (advanced):
//console.profile() / console.profileEnd() → performance profiling (DevTools)



// Final Reality Check
// You don’t need everything

// In real projects mostly used:

// log
// error
// warn
// table
// time





// From Here We Can UnderStant About How We can Link Js With Our Html


//1. Using <script> tag inside HTML
<script>
  console.log("JS connected");
</script>

//2. Linking external JS file (most common ✅)
//   <script src="script.js"></script>           👉 Your JS code will be in script.js

//3.   Where to place <script> tag
//     Inside <head> (not recommended)
//     Before closing </body> (best practice ✅)

//<body>
//  <h1>Hello</h1>
//
//  <script src="script.js"></script>
//</body>