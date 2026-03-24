
// 🔹 While Loop in JavaScript

// ➤ Definition
//    A while loop executes a block of code as long as the condition is true

let i=0;
while(i<5){
    console.log(i,"Times Woking on While Loop");
    i++;
}


//🔥 2. While Loop with Array
let arr  = [10,20,30,40,50,60];
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}


//🔥 3. While Loop with String
let str = "String";
let k=0;
while(k<str.length){
    console.log(str[k]);
    k++;
}

// 🔹 Key Points
// Loop runs only if condition is true
// If condition is false initially → loop will not run
// Must update variable (i++) to avoid infinite loop
// Works with arrays, strings, and numbers


//⚠️ Infinite Loop Example (Avoid)
let m = 0;
while (m < 5) {
  console.log(i);
  // missing i++
}