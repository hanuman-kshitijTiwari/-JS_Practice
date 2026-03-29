//🔹1 What is an Object Literal?
//    An object literal is a way to create objects in JavaScript using curly braces {}.
//    It stores data in key–value pairs.


const person = {
    name:"kshitij",
    age:20,
    city:"Uttarpradesh"
};

console.log(person);


//🔹2 Why Use Objects?
//   Objects allow you to group related data into a single structure.


const student = {
    name:"Kshitj-Tiwari",
    rollNo:101,
    marks: 10
};
console.log(student);
//Instead of multiple variables, everything is stored in one object.

//🔹3 Accessing Object Properties
// 1. Dot Notation
    console.log(student.name);  // Kshititj-Tiwari;

// 2. Bracket Notation
   console.log(student["marks"]) //10;

//🔹4 Modifying Values

    student.marks = 90;
    console.log(student.marks);

//🔹5 Adding New Properties
    student.city = "Mumbai";


//🔹6 Methods (Functions inside Objects)

const user = {
    name:"Kshitij-Tiwari",
    greet:function(){
        console.log("Hello!");
    }
};

user.greet();   // Hello!;
//👉 A function inside an object is called a method.

//🔹7 ES6 Short Syntax (Shorthand Properties)
    ```const name = "Kshitij";
    const age = 20;

    const obj = {
        name,
        age
};```

//This is equivalent to:
```const obj = {
    name: name,
    age: age
};```


const user2 = {
    name: "Kshitij",
    address:{
        city: "Mumbai",
        pincode:400001
    }
};

console.log(user.address.city);   //Mumbai;


// 🔹 Key Points
//    Objects store data in key–value pairs
//    Keys are unique
//    Objects are mutable (can be changed)
//    Objects are reference types
//    Keys are automatically converted to strings

