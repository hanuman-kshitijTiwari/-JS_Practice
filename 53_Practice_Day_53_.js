
// Your code is mainly about how this behaves differently in:
// normal functions
// arrow functions
// callbacks (setTimeout)

// 🧠 1. What is this?

// 👉 this refers to the execution context of a function
// 👉 In simple terms: who is calling the function


// ⚙️ 2. Your Object
const student = {
  name: "aman",
  marks: 95,
}


// ⚠️ 3. prop: this
        prop: this


//👉 This is evaluated when the object is created, not when it's used.

// At that time, the surrounding context is global
// In browser → this = window


// So 
student.prop === window // true

//✅ 4. getName (Normal Function)
```getName: function () {
  console.log(this);
  return this.name;
}
```
// Rule:
// 👉 For normal functions, this depends on how the function is called
// ✔️ Call:
//     student.getName();

//👉 Output:
    this = student
//✔️ Return: "aman"


// ❌ 5. getMarks (Arrow Function)
getMarks: () => {
  console.log(this);
  return this.marks;
}


// Rule:

// 👉 Arrow functions do NOT have their own this

// 👉 They use lexical this
// = this from the surrounding scope

// ✔️ Here:

// Surrounding scope = global
// So this = window

// ✔️ Result:
    student.getMarks(); // undefined
    window.marks === undefined


//🧠 6. Lexical this

// 👉 Arrow functions capture this from where they are defined, not called.

// This is called:  Lexical scoping of this


//🔥 7. getInfo1 (Arrow inside normal function)
```getInfo1: function() {
  setTimeout(() => {
    console.log(this);
  }, 2000);
}
```

// Step-by-step:
// getInfo1 is a normal function → this = student
// Arrow function inside → takes this from parent

// Output : student object    // ✅ This is the correct pattern for callbacks

// ❌ 8. getInfo2 (Normal function inside setTimeout)
```getInfo2: function() {
  setTimeout(function() {
    console.log(this);
  }, 2000);
}
```
// What happens:
// Inner function is a normal function
// Called by setTimeout
//👉 So:
   ``` this = window (or undefined in strict mode)```
//❌ Not student


// | Case       | Function Type   | `this` Value |
// | ---------- | --------------- | ------------ |
// | `prop`     | global context  | `window`     |
// | `getName`  | normal          | `student`    |
// | `getMarks` | arrow           | `window`     |
// | `getInfo1` | arrow callback  | `student`    |
// | `getInfo2` | normal callback | `window`     |
