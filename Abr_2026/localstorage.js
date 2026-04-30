
// adicionando item no localstorage
localStorage.setItem("nome", "Ygor");

//lendo um valor de um item do localstorage
let nome = localStorage.getItem("nome");

console.log(nome);

//removendo dados: um item
localStorage.removeItem("nome");

nome = localStorage.getItem("nome");
console.log("depois:", nome);

//apagando tudo
localStorage.clear();