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