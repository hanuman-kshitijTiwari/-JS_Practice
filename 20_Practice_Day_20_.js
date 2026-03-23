//Array Refrence 
// 🔹 What is Array Reference?

// 👉 JavaScript me array direct copy nahi hota, balki uska reference (address) copy hota hai

// 👉 Matlab:
//     do variables same array ko point kar sakte hai


// ex :
let arr1 = [1, 2, 3];
let arr2 = arr1;

// arr1 → original array
// arr2 → copy nahi bana
// ❗ Dono same array ko point kar rahe hai


// 🔥 Visualization
// arr1 ──► [1, 2, 3]
// arr2 ──┘

//👉 Dono ek hi jagah point kar rahe hai

// problem 
arr2[0] = 99;
console.log(arr1);  // [99, 2, 3]
// we are changing arr2 but arr1 automatically changes
//Why this happens?  beacuse of Arrays Store In Heap Merorey
// Variables Are Only Store There Refrence 


//🔥👉 “Arrays share memory, not 



// 1. Direct Reference
// 2. Shallow Copy
// 3. Deep Copy
// 4. Primitive vs Reference
// 5. Memory basics (stack/heap)
// 6. Mutation vs Immutability


let Firstname = "KSHITIJ";  // true 
let name ="name";          // True  return karega
let Array =[ 1,3,54,4];  // agr hamm esa check kare to kya honga [1]===[1]   // False 

// [1] == [1]   // false ayaga 
// [ ] == [ ]  // False

// ye sab Array Reference Ke wajha se hota hai Kyu Ki Unme Valuse nahi chaeck kart hai wo Address check karta hai bhai 
let arr = ['a','b'];
let arrCopy = arr;
arrCopy  ==  arr;
arrCopy  === arr;

