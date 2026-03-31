//Random Integer in JavaScript
// Introduction
// JavaScript does not provide a direct method to generate random integers. Instead, it provides the `Math.random()` method, which generates a floating-point number between 0 (inclusive) and 1 (exclusive).
// To generate random integers, we combine `Math.random()` with other mathematical operations.



// 🔹Math.random()
//    Syntax:     Math.random();


// Returns a value in the range:
// 0 ≤ value < 1
 
// Example outputs:
// 0.1234
// 0.9876

//🔹 Converting to a Range
//    To scale the random value to a desired range:
//    Syntax:  
      Math.random() * n;


// Range becomes:
// 0 ≤ value < n

//🔹 Converting to Integer
//    To remove the decimal part and get an integer:
//    Syntax:   
      Math.floor(Math.random() * n);
//   Final range:
//   0 to (n - 1)

//🔹 General Formula
//    Generate Random Integer between 0 and (n - 1)
//    Syntax:
      Math.floor(Math.random() * n);

// Generate Random Integer between a and b (inclusive)
//    Syntax:
      Math.floor(Math.random() * (b - a + 1)) + a;

//🔹 Explanation of Formula

For:
    Math.floor(Math.random() * (b - a + 1)) + a;


// * `(b - a + 1)` → total number of values in the range
// * `Math.random()` → generates random decimal
// * `Math.floor()` → converts to integer
// * `+ a` → shifts the range to start from `a`

//🔹 Examples
// 1. Random Integer from 1 to 10

//    Syntax:
      Math.floor(Math.random() * 10) + 1;


// 2. Random Integer from 5 to 15

//    Syntax:
      Math.floor(Math.random() * (15 - 5 + 1)) + 5;

// 3. Dice Simulation (1 to 6)

//    Syntax:
      Math.floor(Math.random() * 6) + 1;


//⚠️ Common Mistakes
//❌ Missing +1

//    Syntax:
      Math.floor(Math.random() * (10 - 1)) + 1;
//    * Output range:
//   1 to 9 (10 is excluded)

// ❌ Not Using Math.floor()
//    Syntax:
      Math.random() * 10;
//    * Output will be decimal, not integer



// 📌 Key Notes

// * `Math.random()` never returns 1
// * Always use `Math.floor()` for integers
// * Use `+1` when you need an inclusive range
// * This concept is widely used in algorithms, simulations, and games

// 🚀 Use Cases

// * Random number generation in games
// * OTP / verification code generation
// * Random test case generation
// * Shuffling arrays (Fisher-Yates Algorithm)


// ✍️ Author
// Kshitij Tiwari
