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





// OTP Resend Process 
// 3 Important Concepts Resend me

// 1️⃣ New OTP generate
// 👉 har baar resend pe naya OTP

// 2️⃣ Old OTP invalidate
// 👉 sirf latest OTP hi valid hona chahiye

// 3️⃣ Cooldown (IMPORTANT 🔥)
// 👉 user baar baar click na kare
       ```canResend = false; 
       👉 30 sec baad:
          canResend = true;
       ```

```👉 Step 1: OTP generate
👉 Step 2: timer start (30 sec)
👉 Step 3: resend disabled
👉 Step 4: time up → enable resend
👉 Step 5: click → new OTP```



let otp = "";
let expiryTime = 0;
let canResend = true;

// 👉 OTP generate function
function generateOTP() {
    otp = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    expiryTime = Date.now() + 30000; // 30 sec expiry
    console.log("New OTP:", otp);
    canResend = false;
    startTimer();
}

// 👉 Timer for resend
function startTimer() {
    let timeLeft = 30;
    let timer = setInterval(() => {
        console.log("Resend in:", timeLeft, "sec");
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            canResend = true;
            console.log("Resend OTP available ✅");
        }
    }, 1000);
}

// 👉 Resend OTP
function resendOTP() {
    if (!canResend) {
        console.log("Wait before resending ❌");
        return;
    }
    generateOTP(); // new OTP
}

// 👉 Verify OTP
function verifyOTP(userOtp) {
    if (Date.now() > expiryTime) {
        console.log("OTP Expired ❌");
    } 
    else if (userOtp === otp) {
        console.log("OTP Verified ✅");
    } 
    else {
        console.log("Wrong OTP ❌");
    }
}


```💡 Important cheeze jo tune implement kari

👉 har resend pe new OTP ✔️
👉 purana OTP auto invalid ✔️
👉 30 sec cooldown ✔️
👉 expiry system ✔️
👉 verification ✔️```