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

