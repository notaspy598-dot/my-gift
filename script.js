// --- CONFIGURATION ---
const secretPassword = "1812"; // CHANGE THIS TO YOUR PASSWORD
const reasons = [
    "Because you make me smile every single day.",
    "Because you have the most beautiful smile.",
    "Because you gave me something ;) ❤.",
    "Because you have the best heart.",
    "Because I can be myself around you."
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
        
        // START CONSTANT HEART STREAM
        // This creates 1 heart every 300 milliseconds (0.3 seconds)
        setInterval(() => {
            createHearts(1);
        }, 300);
        
        // Initial Burst for effect
        createHearts(30);
        
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
        musicBtn.innerText = "▶ Play Music";
        isPlaying = false;
    });
}

// 3. The "Reasons" Generator
reasonBtn.addEventListener('click', () => {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    reasonDisplay.innerText = randomReason;
    
    // Add a small extra burst when clicking
    createHearts(5);
});

// --- Floating Hearts Helper Function ---
function createHearts(amount) {
    const container = document.getElementById('heart-container');
    const colors = ["#ff4d6d", "#c9184a", "#ff8fa3", "#ffb3c1"]; // Different pinks

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random Position
        heart.style.left = Math.random() * 100 + "vw";
        
        // Random Animation Duration (between 3s and 8s)
        heart.style.animationDuration = Math.random() * 5 + 3 + "s"; 
        
        // Random Size
        heart.style.width = Math.random() * 20 + 10 + "px";
        heart.style.height = heart.style.width; 
        
        // Random Color (Optional: makes it look more vibrant)
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(heart);
        
        // Clean up heart after 8 seconds so the browser doesn't get slow
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}

