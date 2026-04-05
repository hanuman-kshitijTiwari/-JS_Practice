//📌 Methods in JavaScript
//In JavaScript, a method is a function that is stored as a property of an object.
//In simple terms, when a function belongs to an object, it is called a method.


//Basic Syntax of Method in JavaScript
// A method is simply a function defined inside an object.



//🔹 Syntax
const objectName = {
    methodName: function(parameters) {
        // code
    }
};


//🔹 Example
const user1 = {
    name: "Kshitij",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

user1.greet();


//🔹 Modern (Short) Syntax
const user2 = {
    name: "Kshitij",
    greet() {
        console.log("Hello " + this.name);
    }
};



// 💡 Key Point
// A method = function inside an object

//🔍 Example
const person = {
    name: "Kshitij",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Kshitij

// Explanation
// person is an object.
// greet is a function inside the object.
// Since the function is part of the object, it is called a method.
// this refers to the current object (person).


//📌 Key Concept: this Keyword
///  The this keyword refers to the object that is calling the method.

const car = {
    brand: "BMW",
    start: function() {
        console.log(this.brand + " is starting...");
    }
};

car.start(); // BMW is starting...

//⚠️ Important Points
// A method is just a function inside an object.
// Methods are called using dot notation: object.method()
// this helps access properties of the same object.




//🔹 Method Shorthand kya hota hai?

//👉 Jab hum object ke andar function likhte hain bina function keyword ke
//👉 Usse bolte hain method shorthand

//🔹 Normal (Old Way)

const user3 = {
    name: "Kshitij",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

//🔹 Shorthand (Modern Way ✅)

const user4 = {
    name: "Kshitij",
    greet() {
        console.log("Hello " + this.name);
    }
};

//👉 Same kaam, bas syntax short aur clean 💯

//🔥Difference samajh le ek line me
//    Old: greet: function()
//    Short: greet()

//🔹 Shorthand with Parameters
const calc = {
    add(a, b) {
        return a + b;
    }
};

console.log(calc.add(2, 3)); // 5

//🔹 Multiple Methods (Clean Code)

const app = {
    start() {
        console.log("App Started");
    },

    stop() {
        console.log("App Stopped");
    }
};

app.start();
app.stop();

//🔹 Real-Life Example (GitHub ke liye 🔥)
const userAccount = {
    name: "Kshitij",
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    },

    check() {
        console.log(this.balance);
    }
};

userAccount.deposit(500);
userAccount.check(); // 1500

// Important Note
//👉 Shorthand ≠ Arrow Function
//❌ Galat:  greet: () => {}
//✔ Sahi : greet() {}