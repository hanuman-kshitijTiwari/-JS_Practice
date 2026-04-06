// Try Catch Block 
// What is try...catch?
// try...catch ka use JavaScript me errors handle karne ke liye hota hai, taki program crash na ho.

//Syntax
try {
    // Risky Code (Jisme Error Aa Sakta hai)
}
catch (error) {
    // error handle Karne Ka Code 
}

///Basic Example
try {
    let result = 10/-0;
    console.log(result); //
}catch(error) {
    console.log("Error Occured: ", error.message); // Infinity
    //👉  error Ayega catch block run Karenge .
}



// ⚡ Example with Error
try {
    console.log(x); // x is Not defined
}
catch (error) { 
    console.log("Something went wrong!");  // Something went wrong!

}



// Example 3:
try{
    console.log(a);
}catch{
    console.log("variable A doesn't")
}

console.log("Hello1");
console.log("Hello2");
console.log(n);
console.log("Hello3");
console.log("Hello");
// abhi yaha pe 1,2 to print karnga but 3 line me error ja jayega  jaise  a is not difine etc
console.log("hello1");
console.log("hello2");
// ab pure programm ko run karane ke liye haame apne try aur catchg wale bloack ko use karte hai 


try {
    console.log(a);
    console.log(n);
} catch{
    console.log("variable a & n doesn't")
}
    console.log("hello3");
    console.log("hello");




console.log("Hello1");
console.log("Hello2");
console.log("Hello3");

try{
    console.log(a)
}catch(error){
    console.log("Catch An error.... a is Not define");
    console.log(error)  // esse haam excatly apne error ko likh sakte hai done bhai
};
console.log("Hello4");
console.log("Hello5");
console.log("Hello6");






