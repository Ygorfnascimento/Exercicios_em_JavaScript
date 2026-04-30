// Selecionando os elementos
const form = document.getElementById('register-form');
const inputNome = document.getElementById('name');
const inputEmail = document.getElementById('email');
const mensagemErro = document.getElementById('msg '); // Note o espaço no ID conforme seu HTML
const listaItens = document.getElementById('items');

form.addEventListener('submit', (event) => {
    // Impede a página de recarregar
    event.preventDefault();

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();

    // Validação básica
    if (nome === '' || email === '') {
        exibirErro("Preencha todos os campos!");
        return;
    }

    // Se estiver tudo ok, adiciona o item e limpa o erro
    mensagemErro.classList.replace('opacity-100', 'opacity-0');
    adicionarItem(nome, email);

    // Limpa os campos
    form.reset();
});

function exibirErro(texto) {
    mensagemErro.textContent = texto;
    mensagemErro.classList.replace('opacity-0', 'opacity-100');
    
    // Esconde o erro automaticamente após 3 segundos
    setTimeout(() => {
        mensagemErro.classList.replace('opacity-100', 'opacity-0');
    }, 3000);
}

function adicionarItem(nome, email) {
    const div = document.createElement('div');
    
    // Aplicando classes do Tailwind dinamicamente
    div.className = "bg-gray-50 p-2 rounded border-l-4 border-blue-500 mb-2 text-sm";
    div.innerHTML = `
        <p class="font-bold text-gray-700">${nome}</p>
        <p class="text-gray-500">${email}</p>
    `;

    listaItens.appendChild(div);
}