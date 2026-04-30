const input = document.querySelector("#nome")
const botao = document.querySelector("#salvar")

botao.addEventListener("click", ()=> {
    localStorage.setItem("nome", input.value);
    window.location.reload();
})

const resultado = document.querySelector("#resultado")

const nomeSalvo = localStorage.getItem("nome");

if (nomeSalvo){
    resultado.textContent = `Bem-vindo (a): ${nomeSalvo}.`;
} else {
    alert("Por favor, preencha o campo!")
}

const usuario = {
    nome: "Ygor",
    idade: 20,
    profissao: "Desenvolvedor de Sistemas",
    cidade: "São Paulo"
};

localStorage.setItem("usuario", JSON .stringify(usuario));

const dados = localStorage.getItem("usuario");
const user = JSON.parse(dados);

console.log(user.nome);