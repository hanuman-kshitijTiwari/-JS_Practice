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


