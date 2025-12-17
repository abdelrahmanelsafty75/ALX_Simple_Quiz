function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    let feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";

        feedback.style.color = "#28a745"; 
        feedback.style.backgroundColor = "#d4edda"; 
    } 
    else {
        feedback.textContent = "That's incorrect. Try again!";

        feedback.style.color = "#dc3545"; 
        feedback.style.backgroundColor = "#ffbaba"; 
    }
}
 document.getElementById("submit-answer").addEventListener("click", checkAnswer);