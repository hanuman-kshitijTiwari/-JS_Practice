// Slicing Methode in Js 
// Slice  means Piceses  which is Returns the part of a original string as a new string.
// in Java When We Perfom Slice Operation Always Result Give Us Into String We can Change The Exsiting String 

// Ex 1;
let str1 = "We are Learning Java" ;

let firstSlice = str1.slice(0,10);
console.log(firstSlice);         //We are Lea
// Basicly Its Work from 0 - 9

//Ex 2:
let str2 = "Hello";
let result = str2.slice(0,str2.length);  // hello
console.log(result);
console.log(str2.slice(0,str2.length-1));// hell


//Ex 3:
let str3 = "heyHello";
let results = str3.slice(4);// if u write only sigle index its means Start from 4 end with the length , not length-1;
console.log(results);      // ello

//Ex 4:
let str4 = "hello";
let ans = str4.slice(-2);  //its automatically goes to the end and Count total_length - 2 at that index start the printing the value;
console.log(ans);          //lo



// What you already understand well
//  slice(start, end)
//  End index is not included
//  Works with string length
//  Single parameter → goes till end
//  Negative index from end

//    What you STILL need to learn
// 1. Negative start AND end together

let str5 = "JavaScript";
console.log(str5.slice(-6,-1));   //"Scrip"
// means start from -6  means 6th Char from end;    
//  -1 means stop before last char

//2. When start > end
let str6 = "hello";
console.log(str6.slice(4,1));  //Returns empty string, no error   &&   (This is important in interviews point of view);


// 3. If index is out of range
let str7 = "Hi";
console.log(str7.slice(0,100));   // JavaScript adjusts automatically (no crash)  and return our full string

//4. slice() does NOT modify original string
//You mentioned changing the string, but actually:
let str8 = "Hello";
str8.slice(0, 2);
console.log(str8); // "Hello"
//👉 Strings are immutable in JS
//It always returns a new string


//5. Difference between slice() and substring()
//This is VERY important 👇

let str9 = "Hello";
console.log(str9.slice(-2));     // "lo"
console.log(str9.substring(-2)); // "Hello"
//👉 substring() does NOT support negative values
//👉 slice() does


// 6. Works on Arrays too (not just strings)
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]
//👉 Same concept applies


//🔤 1. String Methods (Most Important)


//1- Extract / Slice Type
    slice()
    substring()
    substr()     //(⚠️ old / deprecated)


//2-Search / Check
    includes()
    indexOf()
    lastIndexOf()
    startsWith()
    endsWith()

//3- Modify / Replace
    replace()
    replaceAll()
    toUpperCase()
    toLowerCase()
    trim()
    trimStart()
    trimEnd()

//4- Combine / Split
//   concat()
//   split()


//5- 📏 Other Useful

    length //(property, not method)
    charAt()
    charCodeAt()
    repeat()


 //📦 2. Array Methods (VERY IMPORTANT 🔥)

//1- Slice / Modify
    slice()
    splice()

//2- Add / Remove
    push()
    pop()
    shift()
    unshift()    

//3- 🔁 Loop / Transform
    map()
    forEach()
    filter()
    reduce()

//4- Search
    find()
    findIndex()
    includes()
    indexOf()

//5-Convert / Join
    join()
    toString()


//⚙️ 3.Important General (Objects / Others)
        Object.keys()
        Object.values()
        Object.entries()


// Strings → ~15–20 important
// Arrays → ~20–25 important     
        


//🥇MUST KNOW (Top Priority)
    slice()
    map()
    filter()
    reduce()
    find()
    includes()
    split()
    trim()


//🥈 SECOND LEVEL
    splice()
    forEach()
    indexOf()
    replace()