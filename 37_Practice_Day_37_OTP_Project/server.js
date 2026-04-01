const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// In-memory store for OTPs
const otpStore = new Map();

// Generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// ===== CONFIGURATION =====
// If you want real email, set these to your Gmail + App Password
const USE_REAL_EMAIL = false; // true = send real email, false = console only
const GMAIL_USER = 'your.email@gmail.com';         // replace
const GMAIL_APP_PASS = 'your_app_password_here';  // replace

// Nodemailer transporter
let transporter;
if (USE_REAL_EMAIL) {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASS
        }
    });
} else {
    console.log("⚠️ Running in TEST MODE: OTP will not be sent via email.");
}

// ===== SEND OTP =====
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email is required' });

    const otp = generateOTP();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 min expiry

    otpStore.set(email, { otp, expiresAt, attempts: 0 });

    console.log(`\n[DEBUG] OTP GENERATED`);
    console.log(`Email: ${email}`);
    console.log(`OTP: ${otp}`);

    if (USE_REAL_EMAIL) {
        try {
            await transporter.sendMail({
                from: '"OTP Service" <no-reply@example.com>',
                to: email,
                subject: 'Your OTP Code',
                text: `Your OTP code is ${otp}. It expires in 5 minutes.`
            });
            return res.json({ message: 'OTP sent successfully to ' + email });
        } catch (err) {
            console.error('Error sending email:', err);
            return res.status(500).json({ error: 'Failed to send OTP email' });
        }
    } else {
        // TEST MODE: just return OTP in response
        return res.json({ message: `TEST MODE: OTP generated successfully`, otp });
    }
});

// ===== VERIFY OTP =====
app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required' });

    const stored = otpStore.get(email);
    if (!stored) return res.status(400).json({ error: 'No OTP requested for this email' });

    if (Date.now() > stored.expiresAt) {
        otpStore.delete(email);
        return res.status(400).json({ error: 'OTP has expired' });
    }

    if (stored.attempts >= 3) {
        otpStore.delete(email);
        return res.status(400).json({ error: 'Max attempts reached. Request new OTP.' });
    }

    if (stored.otp !== otp) {
        stored.attempts += 1;
        return res.status(400).json({ error: 'Invalid OTP' });
    }

    otpStore.delete(email);
    res.json({ message: 'OTP verified successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
