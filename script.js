// --- CONFIGURATION ---
const secretPassword = "1812"; // CHANGE THIS TO YOUR PASSWORD
const reasons = [
    "Because you make me laugh every single day.",
    "Because you have the most beautiful smile.",
    "Because you support my dreams.",
    "Because you make the best coffee.",
    "Because I can be myself around you.",
    "Because you are my best friend."
];
// ---------------------

const loginScreen = document.getElementById('login-screen');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('error-msg');
const audio = document.getElementById('bgMusic');

const reasonBtn = document.getElementById('reasonBtn');
const reasonDisplay = document.getElementById('reasonDisplay');
const musicBtn = document.getElementById('musicControlBtn');

let isPlaying = false;

// 1. LOGIN LOGIC
loginBtn.addEventListener('click', () => {
    if (passwordInput.value === secretPassword) {
        // Password Correct:
        loginScreen.style.opacity = '0'; // Fade out
        setTimeout(() => {
            loginScreen.style.display = 'none'; // Remove
        }, 1000);
        
        // START MUSIC
        playMusic();
        
        // Start Hearts
        createHearts(20);
    } else {
        // Password Wrong:
        errorMsg.style.display = 'block';
        passwordInput.value = ''; // Clear input
    }
});

// 2. Music Control Button
musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerText = "▶ Play Music";
        isPlaying = false;
    } else {
        audio.play();
        musicBtn.innerText = "⏸ Pause Music";
        isPlaying = true;
    }
});

function playMusic() {
    audio.play().then(() => {
        isPlaying = true;
        musicBtn.innerText = "⏸ Pause Music";
    }).catch(e => {
        console.log("Audio issue:", e);
        // If auto-play fails, button will allow them to start it manually
        musicBtn.innerText = "▶ Play Music";
        isPlaying = false;
    });
}

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
