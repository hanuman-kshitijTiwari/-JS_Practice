// string Methods In JS 

// What is a String in JavaScript?
// 👉 A String is just text (words, letters, or characters)

let name = "Kshitij Tiwari";
let pragraph = `upto 100......`

// "In strings, we write text using three types of symbols."
1- ( ' ' )
2- ( " " )
3- ( ` ` )    // special (you can use variables inside)

let number = 10 ;
console.log(`${number} comes After ${number+1}`);


// String Methods
// String methods are built-in functions jo strings par kaam karte hain
// Methods - actions that can be performed on objects.
// Format:
// stringName.method()
// Note : () ka matlab hota hai function call / method call
// Method → object ke saath hota hai
// Function → direct bhi ho sakta hai

// 1. .length
// 👉 String ki length (kitne characters hain)
let text1 = "Hello";
console.log(text.length); // 5

// 2. .toUpperCase()
// 👉 Sab letters CAPITAL me

let text2 = "hello";
console.log(text.toUpperCase()); // HELLO

// 3. .toLowerCase()
// 👉 Sab letters small me

let text3 = "HELLO";
console.log(text.toLowerCase()); // hello

// 4. .includes()
// 👉 Check karta hai word exist karta hai ya nahi

let text4 = "Hello World";
console.log(text.includes("World")); // true

// 5. .indexOf()
// 👉 Word kis position par hai

let text5 = "Hello World";
console.log(text.indexOf("World")); // 6

// 6. .slice()
// 👉 String ka part nikalta hai

let text6 = "Hello World";
console.log(text.slice(0, 5)); // Hello

// 7. .replace()
// 👉 Word replace karta hai

let text7 = "Hello World";
console.log(text.replace("World", "JS")); // Hello JS

// 8. .trim()
// 👉 Extra spaces hata deta hai

let text8 = "   Hello   ";
console.log(text.trim()); // Hello


// 🧠 Easy  trick to Remember:

// length → kitna bada
// upper/lower → case change
// includes → check
// slice → cut
// replace → change
// trim → clean



