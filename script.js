document.getElementById('loveBtn').addEventListener('click', function() {
    // 1. Play Music (if available)
    var audio = document.getElementById('bgMusic');
    audio.play().catch(function(error) {
        console.log("Audio play failed (browser might block auto-play):", error);
    });

    // 2. Alert message
    alert("I love you! Enjoy the music ❤");

    // 3. Trigger 'Confetti' style Heart Explosion
    createHearts(50); // Creates 50 hearts instantly
    
    // Change button text
    this.textContent = "Playing your song...";
});

// Function to create floating hearts
function createHearts(amount) {
    const container = document.getElementById('heart-container');
    
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position and size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
        heart.style.opacity = Math.random();
        heart.style.width = Math.random() * 20 + 10 + "px";
        heart.style.height = heart.style.width; 
        
        container.appendChild(heart);

        // Remove heart after animation keeps the browser clean
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// Create a few background hearts constantly
setInterval(() => {
    createHearts(1);
}, 300);