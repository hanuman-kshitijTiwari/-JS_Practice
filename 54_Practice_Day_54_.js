// Practice Question 
//Q1- Write an arrow function that returns the square of a number 'n'.


```Syntax:
        const functionName = (parameters) => {
        // code
}```


const square = (a) => {
    return a*a;
}  
console.log(square(5));


// const kyun likhte hain? = Bhai arrow function ko hum ek variable me store karte hain.
//const add = ...
// Yahan add ek variable hai jisme function store hai.
// Isliye const, let, ya var use karte hain.


//Q2-  Write a function that prints "Hello World" 5 times at intervals of 2s each.

const print = () => {
    console.log("Hello");
    setTimeout(print, 10000);
}

print();


//✅ 1 . Palindrome Check (using inbuilt methods)
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// ✅ 2. Count Vowels
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello")); // 2


//✅ 3. Array Sum
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1,2,3,4])); // 10

//✅ 4. Find Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([10, 5, 20, 8])); // 20


//✅ 5. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]