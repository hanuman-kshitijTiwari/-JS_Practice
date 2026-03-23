//Multidimension Arays
// Allso called Nested Arrays

// Array inSide array
let matrix = [[1, 2],[8,8],[9,2]];


//🔹 Visualization (most important 🔥)

// [
//   [1, 2],   → row 0
//   [3, 4],   → row 1
//   [5, 6]    → row 2
// ]

// 👉 Index samajh:

// arr[0] → [1, 2]
// arr[1] → [3, 4]
// arr[2] → [5, 6]


// 🔥 Accessing values (VERY IMPORTANT)
// arr[0][0] → 1
// arr[0][1] → 2

// arr[1][0] → 3
// arr[2][1] → 6



let arr = [
  [1, 2],
  [3, 4]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


// Use hota hai:

// Game boards (chess, tic-tac-toe)
// Tables / grids
// Matrix problems
// Image pixels





const arr1 = [2,8,58,8];
 
//✅ Operations allowed on const arr = []
// Access → arr[index]
// Update value → arr[index] = value
// Add → push(), unshift()
// Remove → pop(), shift()
// Insert/Delete/Replace → splice()
// Copy → slice()
// Merge → concat()
// Search → indexOf(), includes()
// Sort → sort()
// Reverse → reverse()
// Loop → for, forEach, for...of
// Transform → map(), filter()

//❌ Not allowed
//    Reassign → arr = [...]