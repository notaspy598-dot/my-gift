// --- CONFIGURATION ---
const reasons = [
    "Because you make me laugh every single day.",
    "Because you have the most beautiful smile.",
    "Because you support my dreams.",
    "Because you make the best coffee.",
    "Because I can be myself around you.",
    "Because you are my best friend."
];
// ---------------------

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
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
    alert("YAY! I love you! ❤ (Listen to the music!)");
    
    // Change button text
    yesBtn.innerHTML = "I Love You Too! ❤";
});

// 2. The "NO" Button - Runs away when hovered over
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Make it break out of the layout
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 3. The "Reasons" Generator - Shows a new reason on click
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
