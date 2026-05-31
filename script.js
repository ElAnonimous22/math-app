let score = 0;
let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1; // Tablas del 1 al 10
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerText = `${num1} x ${num2} = ?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const feedback = document.getElementById('feedback');
    
    if (parseInt(userAnswer) === num1 * num2) {
        score++;
        feedback.innerText = "¡Correcto! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Casi... era ${num1 * num2}. ¡Sigue intentándolo!`;
        feedback.style.color = "red";
    }
    
    document.getElementById('score').innerText = score;
    document.getElementById('answer').value = '';
    generateQuestion();
}

generateQuestion(); // Iniciar al cargar
