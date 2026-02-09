// --- CONFIGURATION ---
const secretPassword = "1218"; // CHANGE THIS TO YOUR PASSWORD
const reasons = [
    "Because you make me smile every single day.",
    "Because you have the most beautiful smile.",
    "Because you gave me something ;) ❤.",
    "Because I can be myself around you."
];
// ---------------------

const loginScreen = document.getElementById('login-screen');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('error-msg');
const audio = document.getElementById('bgMusic');

const yesBtn = document.getElementById('yesBtn');
const reasonBtn = document.getElementById('reasonBtn');
const reasonDisplay = document.getElementById('reasonDisplay');

// 1. LOGIN LOGIC
loginBtn.addEventListener('click', () => {
    if (passwordInput.value === secretPassword) {
        // Password Correct:
        loginScreen.style.opacity = '0'; // Fade out
        setTimeout(() => {
            loginScreen.style.display = 'none'; // Remove
        }, 1000);
        
        // START MUSIC AUTOMATICALLY
        audio.play().catch(e => console.log("Audio issue:", e));
        
        // Start Hearts
        createHearts(20);
    } else {
        // Password Wrong:
        errorMsg.style.display = 'block';
        passwordInput.value = ''; // Clear input
    }
});

// 2. The "YES" Button
yesBtn.addEventListener('click', () => {
    createHearts(100);
    alert("I love you so much! ❤");
    yesBtn.innerHTML = "Forever & Always ❤";
});

// 3. The "Reasons" Generator
reasonBtn.addEventListener('click', () => {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    reasonDisplay.innerText = randomReason;
    createHearts(5);
});

// --- Floating Hearts Helper Function ---
function createHearts(amount) {
    const container = document.getElementById('heart-container');
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
        heart.style.opacity = Math.random();
        heart.style.width = Math.random() * 20 + 10 + "px";
        heart.style.height = heart.style.width; 
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
}
