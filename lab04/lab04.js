function calculateScore() {
    let score = 0;
    let resultHtml = `<table>
        <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Score</th>
        </tr>`;
    
    // Correct answers
    const correctAnswers = {
        q1: 'Paris',
        q2: '4',
        q3: ['2', '3'],
        q4: ['Apple', 'Banana'],
        q5: 'JavaScript',
        q6: ['HTML', 'CSS'],
        q7: '3'
    };
    
    // Question 1: Radio
    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value || '';
    resultHtml += `<tr><td>1. What is the capital of France?</td><td>${q1Answer}</td><td>${q1Answer === correctAnswers.q1 ? 1 : 0}</td></tr>`;
    score += q1Answer === correctAnswers.q1 ? 1 : 0;
    
    // Question 2: Radio
    const q2Answer = document.querySelector('input[name="q2"]:checked')?.value || '';
    resultHtml += `<tr><td>2. What is 2 + 2?</td><td>${q2Answer}</td><td>${q2Answer === correctAnswers.q2 ? 1 : 0}</td></tr>`;
    score += q2Answer === correctAnswers.q2 ? 1 : 0;
    
    // Question 3: Checkbox
    const q3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(el => el.value);
    let q3Score = calculateCheckboxScore(q3Answers, correctAnswers.q3);
    resultHtml += `<tr><td>3. Select prime numbers:</td><td>${q3Answers.join(', ')}</td><td>${q3Score}</td></tr>`;
    score += q3Score;
    
    // Question 4: Checkbox
    const q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(el => el.value);
    let q4Score = calculateCheckboxScore(q4Answers, correctAnswers.q4);
    resultHtml += `<tr><td>4. Select fruits:</td><td>${q4Answers.join(', ')}</td><td>${q4Score}</td></tr>`;
    score += q4Score;
    
    // Question 5: Single select
    const q5Answer = document.querySelector('select[name="q5"]').value;
    resultHtml += `<tr><td>5. Choose a programming language:</td><td>${q5Answer}</td><td>${q5Answer === correctAnswers.q5 ? 1 : 0}</td></tr>`;
    score += q5Answer === correctAnswers.q5 ? 1 : 0;
    
    // Question 6: Multi-select
    const q6Answers = Array.from(document.querySelectorAll('select[name="q6"] option:checked')).map(el => el.value);
    let q6Score = calculateCheckboxScore(q6Answers, correctAnswers.q6);
    resultHtml += `<tr><td>6. Select web development technologies:</td><td>${q6Answers.join(', ')}</td><td>${q6Score}</td></tr>`;
    score += q6Score;
    
    // Question 7: Text field
    const q7Answer = document.querySelector('input[name="q7"]').value.trim();
    resultHtml += `<tr><td>7. Enter the square root of 9:</td><td>${q7Answer}</td><td>${q7Answer === correctAnswers.q7 ? 1 : 0}</td></tr>`;
    score += q7Answer === correctAnswers.q7 ? 1 : 0;
    
    resultHtml += `</table>`;
    resultHtml += `<p>Total Score: ${score}</p>`;
    document.getElementById('result').innerHTML = resultHtml;
}

function calculateCheckboxScore(selectedAnswers, correctAnswers) {
    if (selectedAnswers.length !== 2) return 0;
    const correctSelected = selectedAnswers.filter(answer => correctAnswers.includes(answer)).length;
    return correctSelected === 2 ? 2 : correctSelected === 1 ? 1 : 0;
}