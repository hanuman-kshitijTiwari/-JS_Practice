//Create Object or We Can Say Array of Object 

// Array of Objects in JavaScript
// 🔹 What is an Array of Objects?

// An Array of Objects is used when we need to store multiple items with similar structure.

// Object ({}) → stores single entity data
// Array ([]) → stores multiple values
// Array of Objects → stores multiple structured data
const students = [
    {
        name:"Kshitij-Tiwari",
        age: 21,
        grade:"A+",
        city:"Uttarpradesh"
    },

    {
        name:"Ayush-Tiwari",
        age: 15,
        grade:"D",
        city:"Uttarpredesh"
        
    },
]

console.log(students);


// Why use square brackets []?
// [] → used to create an array
// {} → used to create an object

// 👉 In this case:
// Outer [] → Array
// Inner {} → Objects


//🔹 Accessing Data
//1. Access full object
console.log(students[0]);//{ name: 'Kshitij-Tiwari', age: 21, grade: 'A+', city: 'Uttarpradesh'}
console.log(students[1]);


//2. Access specific property
console.log(students.name) // Undefine
console.log(students[0].name);//Kshititj

//🔹 Looping through Array of Objects
//    Using for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
// OR

for (let i = 0; i < students.length; i++) {
    console.log(students[i].grade);
}

// Using for...of loop (cleaner way)
for(let student of students){
     console.log(student.grade);
}

//🔹 Adding a new object
students.push({
    name: "Rahul",
    grade: "B",
    city: "Chennai"
});
console.log(students);


// 🔹 Real-world Use Cases
// Social media posts (Instagram, Twitter)
// User data
// Product listings (E-commerce)
// API responses (JSON format)



//Short Version
// Array of Objects in JavaScript

const student = [
    { name: "Kshitij", grade: "A+", city: "Sultanpur" },
    { name: "Aman", grade: "O+", city: "Sultanpur" },
    { name: "Rahul", grade: "O+", city: "Sultanpur" },
    { name: "Saral", grade: "A+", city: "Sultanpur" }
];

// Access
console.log(student[0].name);

// Loop
for (let students of student) {
    console.log(students);
    console.log(students.name);
}
