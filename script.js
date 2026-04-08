// State management
let currentValue = '0';
let previousValue = '';
let operation = null;
let trustLevel = 100;
let calculationCount = 0;
let isAIMode = false;

// DOM elements
const display = document.getElementById('display');
const trustFill = document.getElementById('trustFill');
const trustPercent = document.getElementById('trustPercent');
const loadingBar = document.getElementById('loadingBar');
const toast = document.getElementById('toast');
const aiModeToggle = document.getElementById('aiMode');
const buttonGrid = document.getElementById('buttonGrid');

// Sarcastic messages
const roastMessages = [
    "Bro really used a calculator for this? 💀",
    "Try using your brain next time 🧠",
    "My grandma calculates faster than you",
    "Are you even trying?",
    "This is basic math, come on...",
    "Error: User intelligence too low",
    "Math.exe has stopped working",
    "Result too intelligent for you",
    "Did you skip elementary school?",
    "Even a potato could do this faster",
    "Calculating your IQ... Error: Number too small",
    "Have you considered using your fingers?",
    "This is why aliens won't visit us",
    "Your math teacher is crying somewhere"
];

const fakeErrors = [
    "Error: Math is temporarily unavailable",
    "Error 404: Brain not found",
    "System overload: Too much stupidity detected",
    "Warning: Calculation may cause brain damage",
    "Error: Numbers are on strike today",
    "Critical: Math.dll is corrupted",
    "Fatal: Intelligence buffer overflow"
];

// Initialize
function init() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
        
        // Random button movement on hover
        btn.addEventListener('mouseenter', () => {
            if (Math.random() < 0.15) { // 15% chance
                btn.classList.add('moving');
                setTimeout(() => btn.classList.remove('moving'), 300);
            }
        });
    });
    
    aiModeToggle.addEventListener('change', (e) => {
        isAIMode = e.target.checked;
        showToast(isAIMode ? 
            "AI Mode Activated: Now 200% more accurate! 🤖" : 
            "AI Mode Deactivated: Back to normal chaos 😈"
        );
    });
    
    updateDisplay();
}

function handleButtonClick(e) {
    const value = e.target.dataset.value;
    
    // Easter egg: 69 or 420
    if (currentValue === '69' || currentValue === '420') {
        if (Math.random() < 0.3) {
            showToast('Nice. 😏');
        }
    }
    
    // Random button swap (10% chance)
    if (Math.random() < 0.1) {
        swapRandomButtons();
    }
    
    if (value === 'C') {
        clear();
    } else if (value === 'backspace') {
        backspace();
    } else if (value === '=') {
        handleEquals();
    } else if (['+', '-', '*', '/'].includes(value)) {
        handleOperator(value);
    } else {
        handleNumber(value);
    }
    
    decreaseTrust();
}

function handleNumber(num) {
    if (currentValue === '0' || currentValue === 'Error') {
        currentValue = num;
    } else {
        currentValue += num;
    }
    updateDisplay();
}

function handleOperator(op) {
    if (previousValue === '') {
        previousValue = currentValue;
        currentValue = '0';
        operation = op;
    } else {
        handleEquals();
        operation = op;
    }
}

async function handleEquals() {
    calculationCount++;
    
    // 20% chance the equals button just clears everything
    if (Math.random() < 0.2) {
        showToast("You thought 💀");
        clear();
        return;
    }
    
    // 15% chance of fake error
    if (Math.random() < 0.15) {
        showFakeError();
        return;
    }
    
    // Show fake loading
    await fakeLoading();
    
    if (operation && previousValue !== '') {
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue);
        let result;
        
        // Calculate the CORRECT result first
        switch (operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = curr !== 0 ? prev / curr : 'Error';
                break;
        }
        
        // Now apply chaos
        if (result !== 'Error') {
            result = applyChaoticLogic(prev, curr, operation, result);
        }
        
        currentValue = result.toString();
        previousValue = '';
        operation = null;
        updateDisplay();
        
        // Random roast after calculation
        if (Math.random() < 0.25) {
            setTimeout(() => showToast(getRandomRoast()), 500);
        }
    }
}

function applyChaoticLogic(prev, curr, op, correctResult) {
    // AI Mode makes it WORSE
    const chaosChance = isAIMode ? 0.6 : 0.3;
    
    // Easter eggs for specific calculations
    if (prev === 2 && curr === 2 && op === '+') {
        if (Math.random() < 0.5) {
            showToast("2 + 2 = 5 (for large values of 2) 🤓");
            return 5;
        }
    }
    
    if (prev === 9 && curr === 10 && op === '+') {
        if (Math.random() < 0.4) {
            showToast("9 + 10 = 21 (obviously) 📱");
            return 21;
        }
    }
    
    // Random wrong answer
    if (Math.random() < chaosChance) {
        const wrongResults = [
            correctResult + Math.floor(Math.random() * 10) - 5,
            correctResult * 1.1,
            correctResult * 0.9,
            correctResult + 1,
            correctResult - 1,
            Math.floor(Math.random() * 100),
            42, // The answer to everything
            69,
            420,
            Math.PI,
            correctResult * -1
        ];
        
        return wrongResults[Math.floor(Math.random() * wrongResults.length)];
    }
    
    // Sometimes return correct result (to keep them guessing)
    return correctResult;
}

function clear() {
    currentValue = '0';
    previousValue = '';
    operation = null;
    updateDisplay();
}

function backspace() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentValue;
}

function decreaseTrust() {
    trustLevel = Math.max(0, trustLevel - Math.random() * 3);
    trustFill.style.width = trustLevel + '%';
    trustPercent.textContent = Math.floor(trustLevel) + '%';
    
    if (trustLevel < 50) {
        trustFill.classList.add('low');
    }
    
    if (trustLevel < 20 && Math.random() < 0.1) {
        showToast("Trust Level Critical: Calculator may lie at any moment ⚠️");
    }
}

async function fakeLoading() {
    // Random delay between 0.5 and 2.5 seconds
    const delay = 500 + Math.random() * 2000;
    const steps = 50;
    const stepDelay = delay / steps;
    
    for (let i = 0; i <= steps; i++) {
        loadingBar.style.width = (i / steps * 100) + '%';
        
        // 10% chance to reset at 99%
        if (i === steps - 1 && Math.random() < 0.1) {
            showToast("Loading failed. Retrying... 🔄");
            i = 0;
        }
        
        await sleep(stepDelay);
    }
    
    loadingBar.style.width = '0%';
}

function swapRandomButtons() {
    const buttons = Array.from(document.querySelectorAll('.btn:not(.equals)'));
    if (buttons.length < 2) return;
    
    const idx1 = Math.floor(Math.random() * buttons.length);
    let idx2 = Math.floor(Math.random() * buttons.length);
    while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * buttons.length);
    }
    
    const temp = buttons[idx1].dataset.value;
    buttons[idx1].dataset.value = buttons[idx2].dataset.value;
    buttons[idx2].dataset.value = temp;
    
    const tempText = buttons[idx1].textContent;
    buttons[idx1].textContent = buttons[idx2].textContent;
    buttons[idx2].textContent = tempText;
    
    showToast("Buttons shuffled for your convenience 😊");
}

function showFakeError() {
    const error = fakeErrors[Math.floor(Math.random() * fakeErrors.length)];
    currentValue = 'Error';
    updateDisplay();
    display.classList.add('shake');
    setTimeout(() => display.classList.remove('shake'), 500);
    showToast(error);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getRandomRoast() {
    return roastMessages[Math.floor(Math.random() * roastMessages.length)];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize the calculator
init();

// Secret accurate mode (Konami code: up, up, down, down, left, right, left, right)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
let accurateMode = false;

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-8);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        accurateMode = !accurateMode;
        showToast(accurateMode ? 
            "🎮 Accurate Mode Unlocked! (Just kidding, it barely works)" : 
            "Accurate Mode Disabled. Back to chaos!"
        );
        konamiCode = [];
    }
});
