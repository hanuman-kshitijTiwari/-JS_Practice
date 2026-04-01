// 👉 OTP Expiry + Timer System ⏱️

// 💥 Problem kya solve karna hai?
// 👉 OTP hamesha valid nahi rehna chahiye
// 👉 Example: 30 sec ya 60 sec ke baad expire ❌

// 👉 Jab OTP generate ho:
// OTP store karo
// uska time bhi store karo
// 👉 Jab user enter kare:
//     check karo → time exceed to nahi hua?



let OTP = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
let expirTime = Date.now()+30000; // Matlb 30 sec
console.log("OTP :", OTP);

// verify Our Fuction 
function verifyOtp(userOtp){
    if(Date.now() > expirTime){
        console.log("OTP Expired Please Click Resend button");
    }else if(userOtp == otp){
        console.log("OTP Verified");
    }else{
        console.log("Wrong OTP"); 
    }
}

// Note : Date.now() ek inbuilt JavaScript function hai 🔥

console.log(Date.now()); //Ye 1 Jan 2000 se paheel ke Time aur Abhi tak pura deta hai 
console.log(new Date());  //Agar tu readable time dekhna chahe:  2026-04-01T12:47:49.408Z
console.log(new Date().toLocaleTimeString());  // ye Real Time deta hai Like  6:17:49 PM 
console.log(new Date().toLocaleString());      // 4/1/2026, 6:18:37 PM
