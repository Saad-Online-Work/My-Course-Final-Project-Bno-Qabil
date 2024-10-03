let score = 0;
let isGameOver = false;

const zombiesContainer = document.getElementById('zombies-container');
const scoreInfo = document.getElementById('score-info');
const gameOverText = document.getElementById('game-over');

function createZombie() {
    const zombie = document.createElement('div');
    zombie.classList.add('zombie');
    zombie.style.left = '100vw';
    zombie.style.top = `${Math.random() * 80}vh`; // Random vertical position
    zombiesContainer.appendChild(zombie);

    moveZombie(zombie);
}

function moveZombie(zombie) {
    const interval = setInterval(() => {
        if (isGameOver) {
            clearInterval(interval);
            return;
        }

        const zombiePosition = parseInt(window.getComputedStyle(zombie).getPropertyValue("left"));
        if (zombiePosition < 0) {
            clearInterval(interval);
            zombiesContainer.removeChild(zombie);
            createZombie();
        } else {
            zombie.style.left = `${zombiePosition - 2}px`; // Move left
        }

        if (zombiePosition < 70 && zombiePosition > 50) { // Collision detection zone
            endGame();
        }
    }, 20);
}

function endGame() {
    isGameOver = true;
    gameOverText.classList.remove('hidden');
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isGameOver) {
        shoot();
    }
});

function shoot() {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = '100px'; // Ninja position
    bullet.style.bottom = '60px'; // Adjust according to ninja height
    document.body.appendChild(bullet);

    const moveBullet = setInterval(() => {
        const bulletPosition = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
        if (bulletPosition > window.innerWidth) {
            clearInterval(moveBullet);
            bullet.remove();
        } else {
            bullet.style.left = `${bulletPosition + 5}px`; // Move bullet
        }

        document.querySelectorAll('.zombie').forEach(zombie => {
            const zombiePosition = parseInt(window.getComputedStyle(zombie).getPropertyValue("left"));
            if (bulletPosition >= zombiePosition && bulletPosition <= zombiePosition + 40) {
                clearInterval(moveBullet);
                zombiesContainer.removeChild(zombie);
                bullet.remove();
                score += 10;
                scoreInfo.textContent = `Score: ${score}`;
                createZombie();
            }
        });
    }, 20);
}

// Start the game
setInterval(createZombie, 2000); // Create a new zombie every 2 seconds
