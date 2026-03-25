//🔹 do...while Loop in JavaScript
// ➤ Definition
//    A do...while loop executes code at least once, then checks the condition.

//🔥 1. Basic Example
let i = 0;
do{
    console.log(i);
    i++;
}
while(i<5);

//🔥 2. do...while with Array

let arr = [10,20,30,40,50];
let j=0;
do{
    console.log(arr[j]);
    j++;
}
while(j<arr.length);


//🔥 3. do...while with String
let str = "Hello";
let k = 0;
do{
    console.log(str[k]);
    k++;
}
while(k<str.length);



//🔹 for...of Loop in JavaScript

// ➤ Definition
// The for...of loop is used to iterate over values of iterable data (arrays, strings, etc.)

//1- Basic Example 
let arr1 = [10,20,30];
for(let value of arr){
    console.log(value);
}


//3. with String
let str2 = "hello";

for (let char of str2) {
  console.log(char);
}

// 🔹 Key Points
// Directly gives values, not index
// Works with arrays, strings, iterable objects
// Cleaner than traditional for loop
// No need to use .length

//➤ One-line Summary
//   “for...of loop is used to directly access values from arrays and strings.”