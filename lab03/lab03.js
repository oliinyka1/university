// --- Task 1 ---

function calculateArea() {
    const d1 = document.getElementById('d1').value;
    const d2 = document.getElementById('d2').value;
    const areaDOM = document.getElementById('area');
    areaDOM.value = (d1*d2/2)%60;
}

// --- Task 2-3 ---
const letters_ua = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х',
    'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ' '
];

const letters_en = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ' '
];

let currentLanguage = 'ua';

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    const letters = currentLanguage === 'ua' ? letters_ua : letters_en;
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => addLetter(letter);
        keyboard.appendChild(button);
    });
}

function addLetter(letter) {
    const display = document.getElementById('display');
    display.value += letter;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
    createKeyboard();
}

// --- Task 4 ---
const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg'
];

currentIndex = 0;
img = document.getElementById('image');

function changeImage(index) {
    currentIndex = (currentIndex + index + images.length) % images.length;
    img.src = images[currentIndex];
}

// --- Task 5 ---
window.onload = function() {generateQuestion()};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let currentQuestion, correctAnswer;
let totalQuestions = 0, correctAnswers = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*', '/'];
    
    const operation = operations[((num2 == 0 && num2!=5 && num2!=1) ? getRandomInt(3) : getRandomInt(4))];
    
    switch(operation) {
        case '+': correctAnswer = num1 + num2; break;
        case '-': correctAnswer = num1 - num2; break;
        case '*': correctAnswer = num1 * num2; break;
        case '/': correctAnswer = num1 / num2; break;
    }

    currentQuestion = `${num1} ${operation} ${num2} = `;
    document.getElementById('question').textContent = currentQuestion;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const resultElement = document.getElementById('result');
    
    if (userAnswer == correctAnswer) {
        resultElement.textContent = "Correct";
        correctAnswers++;
    } else {
        resultElement.textContent = `Wrong, correct answer is "${correctAnswer.toFixed(2)}"`;
    }
    
    totalQuestions++;
    updateScore();
    generateQuestion();
}

function updateScore() {
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    document.getElementById('score').textContent = 
        `Total score ${scorePercentage.toFixed(0)}% (${correctAnswers} correct answers out of ${totalQuestions})`;
}

// --- Task 6 ---
const fruits = ["apple", "pineapple", "apricot", "pear", "lemon"];
const vegetables = ["potatoes", "beetroot", "carrots", "pear"];

function createTree() {
    const treeElement = document.getElementById('tree');
    
    const fruitsLi = document.createElement('li');
    const fruitsSpan = document.createElement('span');
    fruitsSpan.textContent = 'fruits';
    fruitsSpan.className = 'collapsible';
    fruitsSpan.onclick = () => toggleCollapsible(fruitsSpan);
    fruitsLi.appendChild(fruitsSpan);
    
    const fruitsUl = document.createElement('ul');
    fruitsUl.className = 'hidden';
    fruits.forEach(fruit => {
        const fruitLi = document.createElement('li');
        fruitLi.textContent = fruit;
        fruitsUl.appendChild(fruitLi);
    });
    fruitsLi.appendChild(fruitsUl);
    treeElement.appendChild(fruitsLi);

    const vegetablesLi = document.createElement('li');
    const vegetablesSpan = document.createElement('span');
    vegetablesSpan.textContent = 'vegetables';
    vegetablesSpan.className = 'collapsible';
    vegetablesSpan.onclick = () => toggleCollapsible(vegetablesSpan);
    vegetablesLi.appendChild(vegetablesSpan);
    
    const vegetablesUl = document.createElement('ul');
    vegetablesUl.className = 'hidden';
    vegetables.forEach(vegetable => {
        const vegetableLi = document.createElement('li');
        vegetableLi.textContent = vegetable;
        vegetablesUl.appendChild(vegetableLi);
    });
    vegetablesLi.appendChild(vegetablesUl);
    treeElement.appendChild(vegetablesLi);
}

function toggleCollapsible(element) {
    const content = element.nextElementSibling;
    if (content) {
        content.classList.toggle('hidden');
    }
}

// Initialize all tasks
createKeyboard();
generateQuestion();
createTree();


