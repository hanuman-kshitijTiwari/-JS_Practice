// Splice In Array 
// This Methode Changes our Original Array

// 👉 splice() Working On:
// Inside the array Changes the Value Like  (add, delete, replace)  elements in place 
// // splice(start, deleteCount, item0...itemN)
// Syntax :
//    array.splice(start, deleteCount, newElement);
//👉 “Kaha se start karna hai + kitna delete karna hai + kya add karna hai”


let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
colors.splice(2,3,3);  //[ 'red', 'yellow', 3, 'orange', 'pink', 'white' ]
console.log(colors);   
colors.splice(0, 1, "black", "grey");
console.log(colors);    //[ 'black', 'grey', 'yellow', 3, 'white' ]


//🔹 1. Delete elements
let arr1 = [10, 20, 30, 40];
arr1.splice(1, 2);  // That means From Index To 2 index Can Be Deleted Done 
// output [10, 40]

//🔹 2. Add elements (without deleting)
let arr2 = [10, 20, 30];
arr2.splice(1, 0, 15); // [10, 15, 20, 30]
// So That Means In Index Dont Dlete Ant Things Just add 15 at that postion 

//🔹 3. Replace elements
let arr3 = [10, 20, 30];
arr3.splice(1, 1, 99);   // [10, 99, 30]
// Here What Happen At index one delet index one and Replace By 99

//Ex 
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 8);
console.log(arr);
//start = 1 → index 1 se start (value = 2), deleteCount = 2 → 2 elements delete karo → (2, 3), add = 9, 8 → unki jagah ye daal do

//Visualization

//Initial:
// [1, 2, 3, 4]
//      ↑
//    start

// Delete:
// [1,    ,    , 4]
//    (2, 3 removed)

// Add:
// [1, 9, 8, 4]

// Final Answer  [1, 9, 8, 4]

// THis is Our Splice methode end Here 



// Reall Life Example 
// To Do List (Most Common);
let todos = ["Studys", "Gym", "Code", "Sleep"];
let index = todos.indexOf("code");
if(index !== -1){
    todos.splice(index,1);
} 
console.log(todos);   // ["Study", "Gym", "Sleep"]