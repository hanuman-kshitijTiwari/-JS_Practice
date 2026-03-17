// we Can UnderStand Here How To handle Strings In Java And There Built in Operation on it 



// String in JS : Strings are text or sequence of characters

let  StrinName = "I am Kshitij Tiwari Of CSE Student We Are Learing Js Fron Basic";

let role = 'Student';
let char = 'a'; 
let num = '23';  // typeof : String Ayega 
let empty = " "; // ye hamri empty Stirng hai 

// Note: tum dono  " " ye wala Aur ' ' ye wala use karo chalega par jaise ek time pe ek hi use karna  code chal jata hai but it is not good practice done 

let str ="cbasjcbasjcbasb  klsncklsncklsnckl";


// String in JS :Strings are text or sequence of characters 

let sentence ='This is "Apple"'; // out put :  This is "Apple" ; lekin haam sigle ke andhr single aur double quote ke andhr double qoute nahi laga sakte hai 



// Note We Can Write Strings In Js In 3 Types 

// 1. Double quotes
let name1 = "Kshitij";


// 2. Single quotes
let name2 = 'Kshitij';

//3. Backticks (Template literals)
let name3 = `Kshitij`;
let msg1 = `Hello ${Variable_Name}`;

let text1 = 'He said "Hello"';


// 👉 Conclusion:
// JavaScript me string double quotes me hi likhna zaroori nahi hai — single quotes aur backticks bhi valid hain.






// String Indices: internaly java me string ko har chacter ko potsion mil jati hai 

let name = "Kshi tij "

//             K s h i   t i j 
//             _ _ _ _ _ _ _ _
//             1 2 3 4 5 6 7 8
 
// Accesseing The Our Elements

// name[0] -> 'K'
// name[1] -> '0' ...

// name.length;
// name[name.length];     // undefine
// name[name.length-1];   // Output  K
// name[name.length-2];   // Output  S
// kshitij.length         // 7 
// "kshitij"[6]           // Esse kya ho jayega Last character a jayega 
// "Tiwari"[0]            // Esse first character a jayega 



// Concatenation : Multipe String Ko jodna >>  Means Adding String Togther  

// "Kshitj"+""+"Tiwari" = "Kshitij Tiwari";

// "Kshitij" + 1 = "kshitij1"  


let FirstName = "kshitij"
let LastName = "Tiwari"
let FullName= FirstName + " " + LastName;
console.log(FullName);

// let Value1 = "Kstitij";
// let number = 1;
// let add1 = Value+" "number;

// let Value2 = "Kstitij";
// let add2 = Value2+" " 1;








// Practice Qs
// Qs. Declare your name as a string and print its length in JS.
// Qs. Declare your first name as a string and print its first character.
// Qs. Declare your first name as a string and print its last character.
// Qs. What is output of following code :
// "apnacollege"+123
// Qs. What are lengths of an empty string & a string with a single space?


let Name = " Kshitij Tiwari"
Name.length 

let firstName = "kshitij"
firstName[0];

let lastName = "Tiwari";

lastName.length

lastName[lastName.length-1];

//Kshitij143123

// empty string to harmari khali hoti hai aur sapce ko haam as a character count karte hai wo count hongi 
// so  empty string  length  0 hui 
// aur agr space ahi to 1 hongi done 



