// Trim Method 
// What is .trim() ?

// 👉 .trim() is a string method in JavaScript
// 👉 It removes whitespace (extra spaces) from a string

//    Important Rule:
// 👉 It only removes spaces from:

// Beginning (start)
// End (last)

// ❗ It does NOT remove spaces in the middle

let msg1 = "   Hello   ";
console.log(msg1.trim()); // "Hello"


//Middle spaces are NOT removed:
let msg2 = "Hello   World";
console.log(msg2.trim()); // "Hello   World"


// ⚠️ Very Important Concept

// 👉 .trim() does NOT change the original string
// 👉  It returns a new string

let msg3 = "   Hello   ";
msg3.trim();
console.log(msg3); // "   Hello   " ❌ not changed

//✅ Correct Way (store the result):

let msg4 = "   Hello   ";
msg4 = msg4.trim();
console.log(msg4); // "Hello" ✅


// 🔐 Real Example (Password case):
let password = prompt("Set your password");
let newPass = password.trim();
console.log(password); // original (with spaces)
console.log(newPass);  // trimmed (no spaces)


// Key Concept:

// 👉 Strings in JavaScript are immutable
// (This means they cannot be changed directly)

//👉 Final Summary:
//    .trim() removes spaces from start & end
//    Does NOT remove middle spaces
//    Does NOT modify original string
//    Returns a new string
//    Always store the result