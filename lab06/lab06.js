// -- Task 1 --
// Email parser example 
function parseEmail() {
    let email = document.getElementById('parser-input').value;
    let regex = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
    let match = email.match(regex);
    let output = "";
    
    if (match) {
        for (let i = 0; i < match.length; i++) {
            output += `<hr> Result[${i}]: ${match[i]}`;
        }
    } else {
        output = '<p class="error">Invalid email format!</p>';
    }
    
    document.getElementById('parser-output').innerHTML = output;
}

// Add example email on load
window.onload = function() {
    document.getElementById('parser-input').value = 'dwbyu@mail.ua';
    parseEmail();
}

// -- Task 2 -- 
// Form validation
function formValidation() {
}

const form = document.getElementById('registrationForm');
const inputs = form.querySelectorAll('input');

const validationRules = {
    email: {
        pattern: /@pnu\.edu\.ua$/,
        message: 'Email must end with @pnu.edu.ua'
    },
    name: {
        pattern: /^[A-ZА-ЯІЇЄ][a-zа-яіїє]+ [A-ZА-ЯІЇЄ]+$/,
        message: 'First name capitalized, last name ALL CAPS'
    },
    login: {
        pattern: /^[a-zA-Z]+$/,
        message: 'Latin letters only'
    },
    password: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_\-!@#$%^&*])[A-Za-z\d_\-!@#$%^&*]{8,}$/,
        message: 'At least 8 chars, 1 letter, 1 number, 1 special char '
    },
    postal: {
        pattern: /^\d{5}$/,
        message: 'Must be 5 digits'
    }
};

function validateField(input) {
    const field = input.name;
    const value = input.value;
    const rule = validationRules[field];
    const messageElement = input.nextElementSibling;

    if (rule.pattern.test(value)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        messageElement.innerHTML = '<span class="checkmark">✓</span>'
        return true;
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        messageElement.innerHTML = `<span class="error-message">${rule.message}</span>`;
        return false;
    }
}

function formValidation() {
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        alert('All fields are valid!');
    }
}

// Real-time validation
inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
});
