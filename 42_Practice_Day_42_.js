// 📌 Function Expression in JavaScript
//     A Function Expression is a way to define a function and store it inside a variable. In this approach, the function does not necessarily have a name and is often referred to as an anonymous function.

//syntax 

```const function_name = function_keyWord(arrg1, arg2 , etc){

    // Your Logic Write here

}
    // Call Your Function 
    console.log(add(arg1, ag2, etc))

```


// Example ;

const add = function(a, b){
    return a+b;
}

console.log(sdd(10,20));  // output :5

```
// Explanation

In the above example:
    add is a variable that stores a function.
    The function takes two parameters a and b.
    It returns the sum of the two values.
    The function is executed using the variable name: add(2, 3).```


// Function Express Vs Function Declaration 

//1- Function Declaration 
function sum(a, b){
    return a+b;
}
// Call Your Function Here 

// 2- Function Exppression 
const multiplction = function(a, b){
    return a*b;
}
// Call Your Function here 


// 💡Key Difference
//    Function Declarations are hoisted (can be called before definition).
//    Function Expressions are not hoisted (must be defined first).


//Conclusion
//Function Expressions allow us to treat functions as values. This makes JavaScript flexible, as functions can be assigned to variables, passed as arguments, and returned from other functions.


~