//Complete Code (OTP + Expiry + Resend + Attempt Limit)

let otp = "";
let expiryTime = 0;
let canResend = true;
let attempts = 0;
let maxAttempts = 3;
let blockedUntil = 0;

// 👉 Generate OTP
function generateOTP() {
    otp = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0');

    expiryTime = Date.now() + 30000; // 30 sec expiry
    console.log("OTP:", otp);

    canResend = false;
    attempts = 0; // reset attempts on new OTP
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
        console.log("Wait before resending ");
        return;
    }

    generateOTP();
}

// 👉 Verify OTP (MAIN LOGIC 🔥)
function verifyOTP(userOtp) {

    // 🚫 Check block
    if (Date.now() < blockedUntil) {
        console.log("Blocked! Try later ");
        return;
    }

    // ⏱️ Check expiry
    if (Date.now() > expiryTime) {
        console.log("OTP Expired ");
        return;
    }

    // ✅ Correct OTP
    if (userOtp === otp) {
        console.log("OTP Verified ");
        attempts = 0;
    } 
    else {
        attempts++;
        console.log("Wrong OTP Attempts:", attempts);

        // 🚫 Block after max attempts
        if (attempts >= maxAttempts) {
            blockedUntil = Date.now() + 60000; // 1 min block
            console.log("Too many attempts! Blocked for 1 min ");
        }
    }
}