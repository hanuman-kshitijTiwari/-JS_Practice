/// Learing Opps Basic 
//# JavaScript OOPs Basics

//## 1. What is OOP?

//Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects. Objects contain **data (properties)** and **functions (methods)**.



//## 2. Object

//An object is a collection of properties and methods.

```javascript
let user = {
  name: "Amit",
  age: 20,
  login() {
    console.log("User logged in");
  }
};
```



//## 3. Class

//A class is a blueprint used to create objects.

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  login() {
    console.log("User logged in");
  }
}

let u1 = new User("Amit", 20);
```



//## 4. Constructor

//A constructor is a special method that is automatically called when an object is created.

```javascript
constructor(name, age) {
  this.name = name;
  this.age = age;
}
```



//## 5. `this` Keyword

//The `this` keyword refers to the current object.

```javascript
this.name = name;
```



//## 6. Encapsulation

//Encapsulation means bundling data and methods together inside a class.

```javascript
class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
```



//## 7. Abstraction
//Abstraction means hiding complex implementation details and showing only essential features.
//Example: ATM system (user doesn't know internal working)



//## 8. Inheritance
//Inheritance allows one class to use properties and methods of another class.

```javascript
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {}

let d = new Dog();
d.eat();
```



//## 9. Polymorphism
//Polymorphism allows methods to have different behaviors.

```javascript
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```



//## 📌 Summary

// * Object → Real-world entity
// * Class → Blueprint
// * Constructor → Initializes object
// * this → Refers to current object

// ### 4 Pillars of OOP:

// * Encapsulation
// * Abstraction
// * Inheritance
// * Polymorphism
