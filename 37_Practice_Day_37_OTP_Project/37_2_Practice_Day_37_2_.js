// DOM Elements
const emailSection = document.getElementById('email-section');
const otpSection = document.getElementById('otp-section');
const emailInput = document.getElementById('email-input');
const sendOtpBtn = document.getElementById('send-otp-btn');
const verifyBtn = document.getElementById('verify-btn');
const resendBtn = document.getElementById('resend-btn');
const inputs = document.querySelectorAll('.otp-input');
const messageEl = document.getElementById('message');
const subtitleMsg = document.getElementById('subtitle-msg');

let currentEmail = '';
let latestOTP = ''; // For TEST MODE only

// Helper: show messages
function showMessage(msg, isError) {
    messageEl.textContent = msg;
    messageEl.style.color = isError ? '#ef4444' : '#10b981'; // red or green
}

// Auto focus setup
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (isNaN(e.target.value)) e.target.value = '';

        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// ===== SEND OTP =====
async function sendOtpRequest() {
    const email = emailInput.value.trim();
    if (!email) {
        showMessage('Please enter a valid email', true);
        return;
    }

    sendOtpBtn.disabled = true;
    sendOtpBtn.textContent = 'Sending...';

    try {
        const response = await fetch('http://localhost:3000/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            currentEmail = email;

            // TEST MODE: display OTP for testing
            if (data.otp) {
                latestOTP = data.otp;
                console.log('TEST MODE OTP:', latestOTP);
            }

            showMessage(data.message, false);

            // Switch UI
            emailSection.style.display = 'none';
            otpSection.style.display = 'flex';
            subtitleMsg.textContent = `Enter the 6-digit code sent to ${email}`;

            startResendCooldown();
        } else {
            showMessage(data.error || 'Failed to send OTP', true);
            sendOtpBtn.disabled = false;
            sendOtpBtn.textContent = 'Send OTP';
        }
    } catch (err) {
        showMessage('Server error. Make sure backend is running.', true);
        sendOtpBtn.disabled = false;
        sendOtpBtn.textContent = 'Send OTP';
    }
}

sendOtpBtn.addEventListener('click', sendOtpRequest);

// ===== RESEND OTP =====
function startResendCooldown() {
    resendBtn.disabled = true;
    let timeLeft = 30;

    const interval = setInterval(() => {
        timeLeft--;
        resendBtn.textContent = `Wait ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            resendBtn.disabled = false;
            resendBtn.textContent = 'Resend OTP';
        }
    }, 1000);
}

resendBtn.addEventListener('click', () => {
    if (!resendBtn.disabled) {
        showMessage('Resending OTP...', false);
        sendOtpRequest();
    }
});

// ===== VERIFY OTP =====
verifyBtn.addEventListener('click', async () => {
    let otp = '';
    inputs.forEach(input => otp += input.value);

    if (otp.length !== 6) {
        showMessage('Please enter a valid 6-digit OTP', true);
        return;
    }

    verifyBtn.disabled = true;
    verifyBtn.textContent = 'Verifying...';

    try {
        const response = await fetch('http://localhost:3000/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: currentEmail, otp })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage(data.message, false);
            setTimeout(() => {
                alert('Account verified successfully!');
                location.reload();
            }, 1000);
        } else {
            // TEST MODE: allow auto-check with latestOTP
            if (latestOTP && otp === latestOTP) {
                showMessage('OTP verified successfully (TEST MODE) ✅', false);
                setTimeout(() => location.reload(), 1000);
            } else {
                showMessage(data.error || 'Invalid OTP', true);
                verifyBtn.disabled = false;
                verifyBtn.textContent = 'Verify OTP';
                inputs.forEach(input => input.value = '');
                inputs[0].focus();
            }
        }
    } catch (err) {
        showMessage('Server error. Make sure backend is running.', true);
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'Verify OTP';
    }
});
