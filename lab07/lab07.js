 // Завдання 1.1
 function reverseNumbers() {
    const numbers = document.getElementById('numbers').value;
    const reversed = numbers.split(' ').reverse().join(' ');
    document.getElementById('reverseResult').textContent = reversed;
}

// Завдання 1.2
function removeZeros() {
    const numbers = document.getElementById('numbersWithZeros').value;
    const noZeros = numbers.replaceAll("0", "")
    document.getElementById('noZerosResult').textContent = noZeros;
}

// Завдання 1.3
function reverseText() {
    const text = document.getElementById('textToReverse').value;
    const reversed = text.split('').reverse().join('');
    document.getElementById('reverseTextResult').textContent = reversed;
}

// Завдання 1.4
function replaceWords() {
    let text = document.getElementById('replaceText').value;
    let words = text.split(' ');
    [words[1], words[2]] = [words[2], words[1]];    
    const replaced = words.join(',');
    document.getElementById('replaceResult').textContent = replaced;
}

// Завдання 2.1
function compareStrings() {
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;
    let result;
    if (str1.length > str2.length) result = 1;
    else if (str1.length < str2.length) result = -1;
    else result = 0;
    document.getElementById('compareResult').textContent = result;
}

// Завдання 2.2
function findChar() {
    const str = document.getElementById('searchString').value;
    const char = document.getElementById('searchChar').value;
    const indices = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
            count++;
        }
    }
    document.getElementById('findCharResult').textContent = 
        `Index: ${indices.join(', ')}. Counter: ${count}`;
}

// Завдання 2.3
function capitalize() {
    const str = document.getElementById('capitalizeString').value;
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById('capitalizeResult').textContent = capitalized;
}

// Завдання 2.4
function countVowels() {
    const str = document.getElementById('vowelsString').value.toLowerCase();
    const vowels = 'аеєиіїоуюя';
    //console.log(vowels[1]);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++;
    }
    document.getElementById('vowelsResult').textContent = count;
}

// Завдання 2.5
function checkSpam() {
    const str = document.getElementById('spamString').value.toLowerCase();
    const spamWords = [
        '100% безкоштовно',
        'збільшення продажів',
        'тільки сьогодні',
        'не видаляйте'
    ];
    const hasSpam = spamWords.some(word => str.includes(word.toLowerCase()));
    document.getElementById('spamResult').textContent = hasSpam;
}

// Завдання 2.6
function truncateText() {
    const str = document.getElementById('truncateString').value;
    const maxLength = parseInt(document.getElementById('maxLength').value);
    let result = str;
    if (str.length > maxLength) {
        result = str.slice(0, maxLength - 3) + '...';
    }
    document.getElementById('truncateResult').textContent = result;
}

// Завдання 3.1
function toCamelCase(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function convertToCamelCase() {
    const input = document.getElementById('snakeCase').value;
    const result = toCamelCase(input);
    document.getElementById('camelCaseResult').textContent = result;
}

// Завдання 3.2
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function convertToSnakeCase() {
    const input = document.getElementById('camelCase').value;
    const result = toSnakeCase(input);
    document.getElementById('snakeCaseResult').textContent = result;
}

// Завдання 3.3
function convertDates() {
    const text = document.getElementById('dateString').value;
    const converted = text.replace(
        /(\d{4})\/(\d{2})\/(\d{2})/g,
        (_, year, month, day) => `${day}.${month}.${year}`
    );
    document.getElementById('dateResult').textContent = converted;
}