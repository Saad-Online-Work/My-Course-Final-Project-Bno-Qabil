document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user answers
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    const q3 = document.getElementById('q3').value.trim().toLowerCase();

    // Define correct answers
    const answers = {
        q1: 'return on investment',
        q2: 'a person or group with an interest in a business',
        q3: 'the portion of a market controlled by a particular company or product'
    };

    // Check answers and generate result
    let score = 0;
    if (q1 === answers.q1) score++;
    if (q2 === answers.q2) score++;
    if (q3 === answers.q3) score++;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of 3.`;
});
