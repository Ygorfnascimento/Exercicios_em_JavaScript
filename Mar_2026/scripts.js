const nome = document.getElementById('nomeProduto')
const preco = document.getElementById('precoProduto')
const lista = document.getElementById('itens')

document.getElementById('salvar').onclick = () => {
    if (!nome.value || !preco.value) return alert('Preencha tudo')

    const item = document.createElement('div')
    item.textContent = `${nome.value} - R$ ${preco.value}`

    // remove ao clicar
    item.onclick = () => item.remove()

    lista.appendChild(item)

    nome.value = ''
    preco.value = ''
}