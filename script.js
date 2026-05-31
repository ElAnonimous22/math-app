let state = { score: 0, lives: 3, level: 1, currentAnswer: 0 };

function getRangeForLevel() {
    // Aumenta la dificultad según el nivel
    if (state.score < 5) return 10;
    if (state.score < 15) return 20;
    return 50;
}

function generateQuestion() {
    const range = getRangeForLevel();
    let divisor = Math.floor(Math.random() * 8) + 2; 
    let res = Math.floor(Math.random() * range) + 1;
    state.currentAnswer = res;
    state.level = range === 10 ? 1 : (range === 20 ? 2 : 3);
    
    document.getElementById('question').innerText = `${divisor * res} ÷ ${divisor} = ?`;
    document.getElementById('level').innerText = state.level;
}

function checkAnswer() {
    const input = document.getElementById('answer');
    if (parseInt(input.value) === state.currentAnswer) {
        state.score++;
    } else {
        state.lives--;
        document.getElementById('lives').innerText = '❤️'.repeat(state.lives);
    }
    
    if (state.lives <= 0) {
        alert(`¡Juego terminado! Tu récord: ${state.score}`);
        location.reload();
    }
    
    input.value = '';
    generateQuestion();
}

generateQuestion();