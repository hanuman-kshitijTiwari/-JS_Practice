// OTP Genrator By Using Math.random()

// let num1 = Math.random() *9000000;
// let num2 =  Math.floor(num1);
// let num3 = Math.random() *1000000;
// let num4 = Math.floor(Math.random() *1000000);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);


let otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);



// Genrate Dynamic Otp Not Fixed Size 

function genrateOTP(length){
    let min = Math.pow(10, length-1);
    let max = 9 * min;

    return Math.floor(min + Math.random() * max);
}

// Test 
console.log(genrateOTP(4)); // 4 Digits
console.log(genrateOTP(5)); // 5 Digits
console.log(genrateOTP(2)); // 2 Digits
console.log(genrateOTP(10)); //10 Digits


// Gernarate Alpha_Numaric Opt 

function OTPGenratorFunction(length){
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let otp = "";

    for(let i=0; i<length; i++){
        let index = Math.floor(Math.random() * chars.length);
        otp += chars[index];
    }
    return otp ;
}

console.log(OTPGenratorFunction(6));


let Alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let Otp = Math.floor(Math.random() * Alpha.length);
let Value = Alpha[Otp];
console.log(Value);