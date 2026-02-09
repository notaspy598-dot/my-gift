// --- CONFIGURATION ---
const reasons = [
    "Because you make me smile every single day.",
    "Because you have the most beautiful smile.",
    "Because you gave me something ;) ❤.",
    "Because I can be myself around you."
];
// ---------------------

const yesBtn = document.getElementById('yesBtn');
const reasonBtn = document.getElementById('reasonBtn');
const reasonDisplay = document.getElementById('reasonDisplay');
const audio = document.getElementById('bgMusic');

// 1. The "YES" Button - Plays music and throws confetti
yesBtn.addEventListener('click', () => {
    // Play Music
    audio.play().catch(e => console.log("Audio requires interaction first"));
    
    // Confetti Explosion
    createHearts(100);
    
    // Alert Message
    alert("I yearn for you so much! ❤");
    
    // Change button text
    yesBtn.innerHTML = "Forever & Always ❤";
});

// 2. The "Reasons" Generator
reasonBtn.addEventListener('click', () => {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    reasonDisplay.innerText = randomReason;
    
    // Add a small heart animation on click
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

