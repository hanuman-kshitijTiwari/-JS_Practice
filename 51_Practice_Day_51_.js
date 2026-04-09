//setTimeout() – Complete Notes
// 🔹 What is setTimeout?
//👉  setTimeout() ek inbuilt JavaScript function hai
//👉  Ye kisi function ko delay ke baad execute karta hai

// 🔹 Syntax
//     setTimeout(callbackFunction, delay);

// Parameters:
// 1- callbackFunction → jo kaam baad me karna hai
// 2- delay → kitne time baad (milliseconds me)

//🔹 Example (Tera wala 👇)

console.log("Hii There !");
setTimeout(() => {
    console.log("Is Kshitij Devloper");
}, 4000);
console.log("Welcome To ABCD");

// 🔥 Output samajh:
// hi there!
// welcome to ABCD
// (It Parul University 4 sec baad)



///🤯 Important Concept (Bahut important hai)
// 👉 JavaScript synchronous + asynchronous dono hoti hai
// 🔸 Synchronous:
//      Line by line execute hota hai
// 🔸 Asynchronous:
//      Delay wale kaam (jaise setTimeout, API call) background me jate hain

//⚡ Kaise kaam karta hai (Simple flow)
//1- "hi there!" print
//2- setTimeout register hota hai (rukta nahi ❗)
//3- "welcome to ABCD" print
//4- 4 sec baad → callback run


//🔹 Milliseconds samajh
// | Time     | Value   |
// | -------- | ------- |
// | 1 second | 1000 ms |
// | 2 sec    | 2000 ms |
// | 4 sec    | 4000 ms |


// 🔹 Real-life use

// 👉 API calls
// 👉 Loading delay
// 👉 Animations
// 👉 Retry logic
// 👉 Timer / countdown



//🔹 Named function ke sath
function greet() {
    console.log("Hello")
}
setTimeout(greet, 2000);

// 🔹 clearTimeout (important 🔥)
// 👉 Timeout ko cancel karne ke liye

const id = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(id); // cancel ho gaya