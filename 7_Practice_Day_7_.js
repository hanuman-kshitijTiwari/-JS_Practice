// What is an Argument?
// 👉 An argument is a value that we pass inside () of a method
// ✅ Format:
   //stringName.method(argument)   // Method name + parentheses () → inside we pass values (arguments)


//1- .indexOf() 

// 📌 What it does:
// 👉 It returns the first index position of a value in a string
// 👉 If not found → returns -1


let str = "ILoveCodingNahiYOU";
console.log(str.indexOf("Love")); // 1
console.log(str.indexOf("ILoveCodingNahiYOU")); // 0

// 👉 "Love" ≠ "love"
// JavaScript is case-sensitive

str.indexOf("0") // ❌ wrong explanation

// 👉 "0" (zero) is not in "ILoveCoding"
// So output will be: -1


// 2- 🔁 Finds only the first occurrence
let text = "haha haha";
console.log(text.indexOf("haha")); // 0
//👉 Even though it appears twice, it gives only first 


//3. 🔎 Use with conditions (VERY USEFUL 🔥)
let texts = "Hello World";

if (texts.indexOf("World") !== -1) {
  console.log("Found!");
}
//👉 Used to check if something exists


//4. ⚡ Shortcut → .includes() (modern way)
let text4 = "Hello World";
console.log(text.includes("World")); // true
//👉 Easier than indexOf()

//5. ⚠️ Works with characters also
let text5 = "JavaScript";
console.log(text5.indexOf("a")); // 1
//👉 Finds first "a"

// Pro Tip:

// 👉 Use:
// .indexOf() → when you need position
// .includes() → when you need true/false


// 🎯 Final Answer:

// 👉 Yes, you have learned most of it already ✅
// 👉 These extra points make you strong in interviews & logic 💪