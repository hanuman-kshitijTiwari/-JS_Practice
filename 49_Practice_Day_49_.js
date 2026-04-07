// Miscellaneous Topics  : yaha haam js Chote chote topic padhne wale hai 


// 1 Arrow Function 

// Normal function:
function add(a, b){
    return a+b;
}

//.. Arrow function:
const add = (a, b) => {
    return a+b;
}

// Aur agar ek hi line ka kaam hai to aur short:
const add = (a,b) => a+b;

//Yaha pe => ko hi arrow bolte hai, isi liye naam hai arrow function.

// Ab concept thoda deep samajh 👇
// Sabse pehla important point — Implicit Return
// Agar function me sirf ek expression hai, to return likhne ki zarurat nahi hoti:
    const square = x => x * x;
// Ye automatically return karega.    


// Ab next — Single parameter shortcut
// Agar sirf ek parameter hai to brackets hata sakte ho:
    const greet = name => "Hello " + name;
// Ab next — No parameter    
    const hello = () => "Hi bro";

// Ab sabse important aur interview wala concept 🔥
// 👉 Arrow function me "this" ka behavior alag hota hai


//: example:

const student = {
    name : "Kshitij",
    normalFunc: function(){
    },
    arrowFunc: () => {
        console.log(this.name);
    }
};

student.normalFunc();   // Kshitij 
student.arrowFunc();    // Undefined

//Kyu?
//Kyuki arrow function ka this object ka nahi hota, wo outer scope (window/global) ka hota hai.


// 👉 Isliye rule yaad rakh:
// Object ke methods me arrow function use mat karna


// Next concept — No arguments object
// Normal function me arguments hota hai:

function test(){
    console.log(arguments);
}
//Arrow function me nahi hota ❌

//Next — Cannot be used as constructor
const Person = (name) => {
    this.name = name;
};

const p = new Person("Bro"); // ❌ Error
//Arrow function se object create nahi kar sakte.

// Next — Best use cases
// Arrow function kaha use kare:
//      Short functions
//      Callbacks (map, filter, reduce)
//      Clean code


let arr = [1,2,3];
let result = arr.map(num => num * 2);
console.log(result);

// Final short summary (yaad rakhne wala) 👇
// Arrow Function:
//         Short syntax ✅
//         No own this ❌
//         No arguments ❌
//         Cannot use new ❌
//         Best for small & callback functions ✅