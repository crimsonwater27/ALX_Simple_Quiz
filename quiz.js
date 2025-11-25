function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById('feedback').innerText = "Please select an answer first.";
        return;
    }

    const userAnswer = selectedOption.value;
    const feedback=document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.innerText = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', checkAnswer);
