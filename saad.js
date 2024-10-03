// Selectors
const gameSection = document.createElement('section');
gameSection.classList.add('game-section');
document.body.appendChild(gameSection);

// Game variables
let score = 0;
let balloons = [];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

// Create balloon elements
function createBalloon(level) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.textContent = level;
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.bottom = Math.random() * 100 + 'vh';

    // Add click event to balloon
    balloon.addEventListener('click', () => {
        score += 1;
        balloon.remove();
        checkScore();
    });

    return balloon;
}

// Start the game
function startGame() {
    score = 0;
    balloons.forEach(b => b.remove()); // Remove existing balloons
    balloons = [];

    gameSection.innerHTML = '<h2>Pop the Balloons!</h2>';
    gameSection.innerHTML += `<p>Score: <span id="score">${score}</span></p>`;

    levels.forEach(level => {
        for (let i = 0; i < 3; i++) { // 3 balloons for each level
            const balloon = createBalloon(level);
            balloons.push(balloon);
            gameSection.appendChild(balloon);
        }
    });
}

// Check if score reaches a certain level
function checkScore() {
    document.getElementById('score').textContent = score;
    if (score >= 9) {
        alert("Congratulations! You've popped all the balloons!");
        startGame(); // Restart the game
    }
}

// Add button for starting the game
const playButton = document.querySelector('.game-button');
playButton.addEventListener('click', () => {
    startGame();
});

// Basic styles for balloons
const style = document.createElement('style');
style.innerHTML = `
    .game-section {
        position: relative;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        text-align: center;
        padding-top: 20px;
    }
    .balloon {
        position: absolute;
        width: 50px;
        height: 70px;
        background-color: #ff6f61;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.1s;
    }
    .balloon:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);
