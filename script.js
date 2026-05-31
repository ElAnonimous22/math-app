function generateQuestion() {
    // 1. Elegimos un divisor pequeño (del 2 al 9)
    let divisor = Math.floor(Math.random() * 8) + 2; 
    // 2. Elegimos un resultado (del 1 al 10)
    let resultado = Math.floor(Math.random() * 10) + 1;
    // 3. Calculamos el dividendo (el número grande)
    let dividendo = divisor * resultado;

    // Guardamos el resultado correcto para comparar después
    window.respuestaCorrecta = resultado;

    document.getElementById('question').innerText = `${dividendo} ÷ ${divisor} = ?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const feedback = document.getElementById('feedback');
    
    // Comparamos con la variable que guardamos arriba
    if (parseInt(userAnswer) === window.respuestaCorrecta) {
        score++;
        feedback.innerText = "¡Muy bien! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Casi... la respuesta era ${window.respuestaCorrecta}.`;
        feedback.style.color = "red";
    }
    
    document.getElementById('score').innerText = score;
    document.getElementById('answer').value = '';
    generateQuestion();
}