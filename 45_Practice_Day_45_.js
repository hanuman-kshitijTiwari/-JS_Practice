// 📌 .this Keyword in JavaScript
//      this keyword JavaScript me ek special keyword hai jo current object ko refer karta hai, yani jis object ke andar method run ho raha hai usi object ki properties ko access karne ke liye this use hota hai.
//      Simple words me bole to:
//... ..this = jis object ne method call kiya hai

//🔹 Why this is Important?
//  Jab hum object ke andar properties ko directly access karne ki koshish karte hain, to error aata hai kyuki JavaScript un variables ko global scope me dhundta hai, object ke andar nahi.
//  Is problem ko solve karne ke liye hum this keyword use karte hain.

//🔹 Example (Without this ❌)
const student1 = {
    name: "Shradha",
    eng: 95,
    math: 93,
    phy: 97,
    
    getAvg(){
        let average = (eng + math + phy) / 3; // ❌ Error
        console.log(average);
    }
};

//👉 Yaha error aayega kyuki eng, math, phy directly accessible nahi hain
//👉 Ye object ke andar hain, global me nahi

//🔹 Correct Example (Using this ✅)

const student2 = {
    name: "Shradha",
    eng: 95,
    math: 93,
    phy: 97,
    
    getAvg(){
        let average = (this.eng + this.math + this.phy) / 3;
        console.log(average);
    }
};

student2.getAvg(); // Output: 95

// 👉 this.eng ka matlab → current object ka eng
// 👉 Isi tarah this.math, this.phy


//🔹 Accessing Object Properties using this
const user = {
    name: "Kshitij",
    
    greet(){
        console.log("Hello " + this.name);
    }
};

user.greet(); // Hello Kshitij
//👉 Yaha this.name → user.name

//🔹 .Important Notes ⚠️
// ...this always refers to the object that calls the method
// ...Object ke andar properties access karne ke liye this use karna zaroori hai
// ...Direct variable access (without this) → error de sakta hai
// ...this sirf methods ke andar properly kaam karta hai

//🔹 Common Mistake ❌
     student1.name(); // ❌ Error
//👉 name ek property hai, method nahi

//✔ Correct:
console.log(student1.name); // ✅
student1.getAvg();          // ✅


// 🔥 Short Summary (GitHub ke end me daal dena)
// this refers to the current object
// Used to access object properties inside methods
// Prevents undefined errors
// Always used with dot notation (this.property)
