// 🔹 What is for loop?
//➤ Definition
// A for loop is used to repeat a block of code multiple times until a condition becomes false.
//Every Programing Language There are 3 types Of Loop but here are 6 types 
//➤ Main Loops
//1 _ for loop 
//2 _ while loop 
//3 _ do While

//➤ Special Loops (for iteration)
//4 _ for...of loop (for arrays, strings, iterables)
//5 _ for...in loop (for object keys)

// /➤ Array Method (loop-like)
//6 _ forEach()

// ➤ One-line Summary
// JavaScript has 3 basic loops + 2 special loops + 1 loop-like method = total 6 ways to iterate.





//1-👍 For Loop :

//➤ Syntax
for(intialization; condition; updates){
    // Code To Excutes Its Based You What u want 
}


//➤ Explanation
// Initialization → starting point of the loop
// Condition → loop runs while this is true
// Update → changes the loop variable after each iteration

//➤ Example
    for (let i = 0; i < 5; i++) {
    console.log(i);
    }


//➤ Flow  : Start → Check Condition → Run Code → Update → Repeat


//🔥 For Loop In Arrays:

let arr = [10,20,30,40,50];
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}


// ➤ Key Points
// Loop stops when condition becomes false
// Most commonly used for arrays and counting
// Gives full control over index


//➤ One-line Summary
//   “A for loop repeats code while a condition is true.”



//🔥 Looping in Strings (JavaScript)
// ➤ Definition
// A string can be looped through to access each character one by one.


let str = "String";
for(let i=0; i<str.length;i++){
  console.log(str[i]);
}

// 🔹 Key Points
//     Strings are index-based → str[0], str[1]...
//     gives total characters
//     Strings are immutable (cannot change characters directly)

//➤ One-line Summary
//   “Strings can be looped to access each character using loops like for, while, or for...of.”