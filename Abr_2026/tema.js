
const botaoAlternar = document.getElementById('botao');
const body = document.body;

botaoAlternar.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});