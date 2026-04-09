// matlb :  jab arrow function ke andhr kuch aur kaam nahi hota hai shirf  ek hi kaam hota hai ki koi ek single value ko return kara raha hai
//matlb use fuction ke andr  koi opretion nahi honag onlyr return ke siva samjha na bhai matlb na to print na calculate etc ; to ese case me haam apne arrow function ko aur bhi chota bana sakte hai compact waise  samjha naha  na  bhai kaise

//Implicit return

// const func = (arg1, arg2..) => {  value  }

const mul = (a, b) => (  
    // bass yaha pe ek chota sa change hota hai wo ye hai ki yaha pe hamare pranthisis ayange currly bracesas nahi ate hai done na 
    a * b
); 
const sum = (a,b) => (
    a+b
);

const cube1 = (n) => (
    n*n*n
)



// Arrow Function Me Do Tarike Hote hai
//1️⃣ Normal (Explicit Return)
const mul1 = (a,b) => {
    return a*b ;
}
// 👉   Yaha:
//      {} use kiya
//      return likhna Zaroori Hai 



//2️⃣ Implicit Return (Tera wala case 💯)
    const mul2 = (a,b) => (a*b);

// 👉 Yaha kya change hua:
// {} hata diye ❌
// () use kiya ✅
// return automatically ho gaya (likhne ki zaroorat nahi)


// 🧠 Rule yaad rakh:
// 👉 Agar function me sirf ek hi kaam hai (single expression)
// ➡️ to tu implicit return use kar sakta hai

