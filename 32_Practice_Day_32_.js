// Math Object
// Properties                                  Methods

    Math.PI                                  //Math.abs(n)   // ye methode hame uski abosulte value return karke det hai matlb ki jaise jab -12 pass karte hai to hame malum hai ki 12 is a value to ingore of minus sign only return the integer that is called absolute value 
    Math.E                                   //Math.pow(a,b)
                                               Math.floor(n)   // nearrest samallest integer Value
                                               Math.ceil(n)   //  same like that floor but there is diffrence is its is round of Larger Integer value      { Ex = 5.5 ko 6 denga aur (-5 = -5 but -5.5 = -5 dega ) }
                                               Math.random() //   Koi Bhi Random value de deta hai jisme 1 nahi ata hai but esme 0 - 1 ke becch ke random number de deta hai               
                                                                                                      
// ye sari hamare pass java me avlable hoti hai direct bhai 
console.log(Math); // karke sab dekh lo 




// Understand Better From Here:

// JavaScript Math Object
// The `Math` object in JavaScript provides properties and methods for mathematical constants and functions. It is a built-in object and does not require instantiation.

//## 🔹 Properties (Constants)

//### 1. PI
//Represents the ratio of a circle's circumference to its diameter.
  Math.PI; // 3.141592653589793




//### 2. E
//Represents Euler's number, used in exponential and logarithmic calculations.
  Math.E; // 2.718281828459045


//## 🔹 Methods

//### 1. Math.abs()
//       Returns the absolute (non-negative) value of a number.
 Math.abs(-12); // 12

//### 2. Math.pow()
//       Returns the value of a number raised to a given power.
 Math.pow(2, 3); // 8

// ### 3. Math.floor()
//       Rounds a number downward to the nearest integer.
Math.floor(5.9);  // 5
Math.floor(-5.1); // -6

// ### 4. Math.ceil()
//        Rounds a number upward to the nearest integer.


Math.ceil(5.1);   // 6
Math.ceil(-5.5);  // -5

//### 5. Math.round()
//       Rounds a number to the nearest integer.
 Math.round(5.5); // 6
 Math.round(5.4); // 5

//### 6. Math.random()
//       Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 Math.random(); // Example: 0.2345

//#### Generate Random Number in Range

```js
// Between 1 and 10
Math.floor(Math.random() * 10) + 1;

// Between a and b
Math.floor(Math.random() * (b - a + 1)) + a;
```



// ### 7. Math.sqrt()
//        Returns the square root of a number.

```js
Math.sqrt(25); // 5
```


// ### 8. Math.max() and Math.min()
//        Returns the largest or smallest value from a set of numbers.

```js
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
```



// ## ⚠️ Important Notes

// | Method | Positive Example | Negative Example |
// | ------ | ---------------- | ---------------- |
// | floor  | 5.9 → 5          | -5.1 → -6        |
// | ceil   | 5.1 → 6          | -5.5 → -5        |
// | round  | 5.5 → 6          | -5.5 → -5        |



// ## 📌 Conclusion
//        The `Math` object is essential for performing mathematical operations in JavaScript, including rounding, exponentiation, and generating random values. It is widely used in problem-solving, especially in data structures and algorithms.


// ## ✍️ Author
//        Kshitij Tiwari
