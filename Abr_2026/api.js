const btn = document.querySelector("#dados");
const display = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    fetch("https://viacep.com.br/ws/05311-020/json/")
        .then((response) => response.json())
        .then((data) => {
            display.innerText = `${data.logradouro}, ${data.cep}`;
        })
        .catch((error) => {
            console.error("Erro: ", error);
        });
});