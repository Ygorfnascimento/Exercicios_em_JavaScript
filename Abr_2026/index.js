// 1. Selecionamos os elementos que vamos manipular
const inputTarefa = document.getElementById('tarefa');
const btnAdicionar = document.getElementById('btn');
const listaUl = document.getElementById('lista');

btnAdicionar.addEventListener('click', () => {
    const textoTarefa = inputTarefa.value;

    if (textoTarefa.trim() === "") {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${textoTarefa}</span>
        <button class="btn-excluir">❌</button>
    `;

    const btnExcluir = li.querySelector('.btn-excluir');
    btnExcluir.onclick = () => {
        li.remove();
    };

    listaUl.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();
});

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});