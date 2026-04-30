/* async function buscarCEP(){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${}/json/`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
buscarCEP(""); */

const botao = document.getElementById("btn-busca");
const busca = document.getElementById("buscar");
const result = document.getElementById("result");

botao.addEventListener("click", () => {
    const valorCEP = busca.value.replace(/\D/g, ''); // limpa máscara
    buscarCEP(valorCEP);
});

async function buscarCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            result.innerText = "CEP não encontrado";
            return;
        }

        result.innerText = `
Rua: ${data.logradouro}
Bairro: ${data.bairro}
Cidade: ${data.localidade}
Estado: ${data.uf}
        `;

    } catch (error) {
        console.log(error);
        result.innerText = "Erro ao buscar CEP";
    }
}