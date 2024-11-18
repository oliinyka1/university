let animationRunning = false;
let animations = [];

function startAnimations() {
    // Gear rotations
    const gears = document.querySelectorAll('.gear');
    gears.forEach((gear, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const animation = gear.animate([
            { transform: 'rotate(0deg) scale(1)' },
            { transform: 'rotate(360deg) scale(1.2)' },
            { transform: 'rotate(720deg) scale(1)' }
        ], {
            duration: 4000,
            iterations: Infinity
        });
        animations.push(animation);
    });

    // Text animations
    const texts = document.querySelectorAll('.text');
    texts.forEach((text, index) => {
        const animation = text.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-20px)' }
        ], {
            duration: 4000,
            iterations: Infinity,
            delay: index * 500
        });
        animations.push(animation);
    });

    // Add random code symbols
    for (let i = 0; i < 10; i++) {
        createCodeSymbol();
    }
}

function createCodeSymbol() {
    const symbols = ['{ }', '( )', '< >', '[ ]', '// ', '+=', '=>', ';;'];
    const symbol = document.createElement('div');
    symbol.className = 'code-symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = Math.random() * 360 + 20 + 'px';
    symbol.style.top = Math.random() * 360 + 20 + 'px';
    document.getElementById('logo-container').appendChild(symbol);

    const animation = symbol.animate([
        { opacity: 0, transform: 'scale(0) rotate(0deg)' },
        { opacity: 1, transform: 'scale(1) rotate(360deg)' },
        { opacity: 0, transform: 'scale(0) rotate(720deg)' }
    ], {
        duration: 3000,
        iterations: Infinity,
        delay: Math.random() * 2000
    });
    animations.push(animation);
}

function stopAnimations() {
    animations.forEach(animation => animation.cancel());
    animations = [];
    
    // Remove code symbols
    document.querySelectorAll('.code-symbol').forEach(symbol => {
        symbol.remove();
    });
}

// Toggle button functionality
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
    if (animationRunning) {
        stopAnimations();
        toggleBtn.textContent = 'Start Animation';
    } else {
        startAnimations();
        toggleBtn.textContent = 'Stop Animation';
    }
    animationRunning = !animationRunning;
});

// Auto-stop after 30 seconds
let autoStopTimeout;
function handleAutoStop() {
    if (animationRunning) {
        clearTimeout(autoStopTimeout);
        autoStopTimeout = setTimeout(() => {
            stopAnimations();
            toggleBtn.textContent = 'Start Animation';
            animationRunning = false;
        }, 30000);
    }
}

toggleBtn.addEventListener('click', handleAutoStop);