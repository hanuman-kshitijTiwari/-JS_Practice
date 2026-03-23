//🔹 What is slice()?

// 👉 slice() is used to copy a portion (part) of an array
// 👉 It does NOT change the original array (very important 🔥)

//🔹 Syntax   :   array.slice(start, end);

// 👉 start → index where copying begins
// 👉 end → index where copying stops (end not included ❗)

let arr1 = [20,30,4,520,8,2,70];
let result = arr1.slice(1,4);
console.log(result);
console.log(arr1);

let arr = [10, 20, 30, 40, 50];
// 🔥 Types of slice(start, end) based on values

// 1. Both Positive
// slice(+start, +end)
arr.slice(1, 4);
// 👉 Normal forward slicing

// 2. Only Start Positive
// slice(+start)
arr.slice(2);
// 👉 Start se end of array tak

// 3. No Arguments
// slice()
arr.slice();
// 👉 Full array copy

// 4. Start Negative, End Positive
// slice(-start, +end)
arr.slice(-3, 4);
// 👉 Start end se count hota hai, end normal

// 5. Both Negative
// slice(-start, -end)
arr.slice(-4, -1);
// 👉 Dono end se count hote hai

// 6. Start Positive, End Negative
// slice(+start, -end)
arr.slice(1, -1);
// 👉 Start normal, end reverse se count

// 7. Start ≥ End
// slice(start ≥ end)
arr.slice(3, 2);
// 👉 Empty array return hota hai

// 8. Start Out of Range
// slice(start >= length)
arr.slice(10, 12);
// 👉 Empty array

// 9. End Out of Range
// slice(start, end > length)
arr.slice(2, 10);
// 👉 End ko automatically length maan leta hai

// 💡 Final Breakdown (memory trick)

// 👉 Total practical types:

// 1. (+, +)
// 2. (+)
// 3. ()
// 4. (-, +)
// 5. (-, -)
// 6. (+, -)
// 7. invalid range (empty)
// 8. out of bound cases