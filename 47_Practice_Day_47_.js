// 🔥 try...catch + finally
//    finally block hamesha run hota hai, chahe error aaye ya na aaye.

try{
    console.log("Try Block");
}catch(error){
    console.log("Catch Block");
}finally{
    console.log("Finally Always runs");
}


// 🎯 Throw Custom Error
try {
    let age = -5;
    if(age < 0){
        throw new Error("Age Cannot be Negative");
    }
}catch (error) {
    console.log(error.message);
}

// ⚠️ Important Points
//    try ke bina catch use nahi kar sakte
//    Sirf runtime errors handle hote hain
//    Syntax errors handle nahi hote
//    finally optional hai