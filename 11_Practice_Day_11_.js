// // what is splice()
// // 👉 Definition:
// // splice() is used to add, remove, or replace elements in an array.
// // ⚠️ Unlike slice() →
// // 👉 splice() modifies the original array (very important)
// // Syntax 
// // array.splice(start, deleteCount, item1, item2, ...)
// // start → index where operation begins
// // deleteCount → how many elements to remove
// // item1, item2... → elements to add (optional)


// //1. Remove Elements
// let arr = [1,2,3,4,5,6];
// console.log(arr);    //[1,2,3,4,5,6];
// arr.splice(1,2);
// console.log(arr);    //[1, 4, 5, 6]
// // 👉 Start from index 1
// // 👉 Remove 2 elements → (2, 3)






//Understande Repeat & Replace Method 
//1- repeat() in Js
// 👉 Definition:
// repeat() is used to repeat a string multiple times and returns a new string.

//Syntax
//  String.repeat(count);
//count → number of times the string should repeat

let str1 = "Hii";
let result = str1.repeat(3)
console.log(result) // HiiHiiHii  tumhra output 3 times ayega 

//2. Count must be 0 or more
"Hi".repeat(0); // "" 
"Hi".repeat(-1); // ❌ Error denga

//3. Count is converted to number
"Hi".repeat("3"); // "HiHiHi"

//Real Use Case

let stars = "*".repeat(5);
console.log(stars); // *****



// 2- replace() in JavaScript in String

// 👉 Definition:
//     replace() replaces part of a string with another value.
//   syntax : string.replace(searchValue, newValue)

let str = "Hello World";
let result1 = str.replace("World", "JavaScript");
console.log(result); // "Hello JavaScript"



//1. Replaces ONLY the first occurrence ❗
    let strs = "apple apple apple";
    console.log(strs.replace("apple", "mango"));  //// "mango apple apple"

//2. To replace all → use replaceAll()
    let stri = "apple apple apple";
    console.log(stri.replaceAll("apple", "mango"));//// "mango mango mango"

//3. Case-sensitive
    let strin = "Hello";
    console.log(strin.replace("hello", "hi")); // no change koi error nahi ata bass change nahi likhega 

//4. Original string does NOT change
    let st = "Hello";
    str.replace("H", "Y");
    console.log(st); // "Hello"

//Real Use Case
    let massage = "   Hello User";
    massage = massage.trim().replace("User" , "A Learner Who Learn JavaScript");
    console.log(massage);


//    Method	                 Purpose

//    repeat()                   Repeat a string
//    replace()                  Replace part of string  
//    replaceAll()               Replace all matches 


// Final Summary:
// repeat() → duplicates a string
// replace() → replaces part of a string
// Both return new strings (original stays unchanged)