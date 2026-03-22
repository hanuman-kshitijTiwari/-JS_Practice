//substring() in JavaScript

//Definition:
//substring() extracts a part of a string and returns it as a new string.

//syntax :    string.substring(start, end);

// start → index where extraction begins
// end → index where it stops (not included)

//Ex 1:
let str1 = "JavaScript";
let result = str1.substring(0,4);//takes characters from index 0 to 3 not 4 actually we can start from 0 so Its Count upto 3 is 4 Thats Why 
console.log(result);            //java

//1. Negative values are NOT allowed
let str2 = "HelloJs";
console.log(str2.substring(-2)); // "Hello"
                                 //Negative values are treated as 

//2. If start > end, it swaps automatically
let str3 = "hello";
console.log(str3.substring(4,1));// "ell"
//👉 Internally it becomes:  substring(1, 4)


//3. End index is NOT included
let str4 = "Hello";
console.log(str4.substring(1, 4)); // "ell"
//👉 It takes index 1, 2, 3

// 4. Original string does NOT change
let str5 = "Hello";
str1.substring(0,2); 
console.log(str);   // hello    matlb ki string banne ke baad jab Maine substring Perfom Kiya To String Nahi Hui
//👉 Strings are immutable in JavaScript 


//Example difference b?w Sliceing Negative index and Substring negative 
let str = "Hello";

console.log(str.slice(-2));     // "lo"
console.log(str.substring(-2)); // "Hello"



// 👉 In real-world development:

// slice() is used more often
// substring() is used less, but still important to understand



// ✅ Final Summary
//     substring() → simple extraction method
//     No negative indexes
//     Swaps values if start > end
//     Returns a new string (does not modify original)