//📌 Higher Order Functions in JavaScript
//  A Higher Order Function (HOF) is a function that either:
//    Takes another function as an argument, OR
//    Returns a function as a result

//In simple terms, functions that work with other functions are called Higher Order Functions.

// Example:

function greet(name){
    return "Hello" + name;
}
function newFinctionFunction(callback){
    const  name  = " Kshitij - Tiwari ";
    const greets = callback(name);
    console.log(callback(name));
}
newFinctionFunction(greet);

//Eplanation
//greet is a normal function.
//newFinctionFunction is a Higher Order Function because it takes another function
// (callback) as an argument.
// The callback function is executed inside the HOF.


// Example 2: Function Returning Another Function

function multiplier(factor){
    return function(number){
        return number* factor;
    };
}
const double = multiplier(2);
console.log(double(5));      // output: 10;

// Explanation
// multiplier returns a new function.
// That returned function remembers the value of factor.
// double(5) means → 5 * 2 = 10


// ⚠️ Important Points
// Functions can be passed as arguments.
// Functions can be returned from other functions.
// This is possible because JavaScript treats functions as first-class citizens.

//Real-Life Examples:
//JavaScript me bohot saare built-in Higher Order Functions hote hain:


const numbers = [1,2,3,4,5];
const result = numbers.map(function(num){
    return num*2;
});
console.log(result);

//Common HOF Methods
    map()
    filter()
    reduce()
    forEach()
    

// Conclusion
// Higher Order Functions make code more flexible and reusable. They are widely used in modern JavaScript for writing clean and functional code.    



// Higher Order Function (Returning Function)
// A Higher Order Function is a function that can return another function. This allows dynamic behavior based on input.

function oddEvenTest(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        };
    } else if (request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        };
    } else {
        console.log("wrong request");
    }
}


//Usage

const checkOdd = oddEvenTest("odd");
checkOdd(5); // true

const checkEven = oddEvenTest("even");
checkEven(4); // true

// Explanation
// oddEvenTest is a Higher Order Function because it returns a function.
// Based on the input ("odd" or "even"), it returns different functions.
// The returned function is then stored in a variable and executed later.
// This pattern allows creating custom behavior dynamically.

//⚠️ Important Note
//   If an invalid request is passed:

//  oddEvenTest("random"); // prints "wrong request"


// Key Concept

// This is an example of:
//     Function returning function
//     Dynamic function creation
//     Basic use of closures in JavaScript


//Conclusion
//Higher Order Functions that return functions are powerful because they allow flexible and reusable code by generating functions based on conditions.