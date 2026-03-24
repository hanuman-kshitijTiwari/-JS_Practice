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