// 1. Selecionar os elementos do DOM
const inputNome = document.getElementById('nome');
const inputPreco = document.getElementById('preco');
const botaoAdicionar = document.getElementById('btn');
const listaProdutos = document.getElementById('produtos');

botaoAdicionar.addEventListener('click', () => {
    const nome = inputNome.value;
    const preco = inputPreco.value;

    if (nome === '' || preco === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const novoItem = document.createElement('li');
    
    novoItem.innerHTML = `<strong>${nome}</strong> - R$ ${preco}`;

    listaProdutos.appendChild(novoItem);

    inputNome.value = '';
    inputPreco.value = '';
    inputNome.focus();
});