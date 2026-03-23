// Sorting Array

let days = ["Monday","Tuesday","Thrusday","Friday","Satuarday"];
console.log(days);
days.sort();
console.log(days);

let square = [25,16,4,49,9];   // In javaScript We Have One Twiest The Sorting Does Not Work In Numbers
console.log(square);
square.sort();
console.log(square);



// 👉 The sort() method works like this:

// It converts all array elements into strings by default
// Then it compares those strings and sorts them
// Because numbers are treated as strings, the order may become incorrect
// That’s why sometimes sort() gives unexpected results when working with numbers


//🔹 1. Compare Function (MOST IMPORTANT 🔥)
//👉 Ye hi real solution hai sorting ka

    arr.sort((a,b) => a - b);
//👉 Ye numbers ko correct ascending order me sort karta hai
//👉 Descending ke liye:
    arr.sort((a, b) => b - a);
     
//🔹 2. Default sorting ka problem samajhna
//👉 Ye concept strong hona chahiye: Kshitij
//    "100" < "2" hota hai (string comparison me)
//     Isliye result weird aata hai