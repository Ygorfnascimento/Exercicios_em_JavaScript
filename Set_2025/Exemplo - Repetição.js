let semaforoAberto = false;

console.log("Ande até a faixa...\n");

while (true) {
  if (semaforoAberto) {
    console.log("Semaforo aberto!!")
    console.log("Olhar para a esquerda");
    console.log("Olhar para a direita\n");
    console.log("Atravesse a rua");
    console.log("Fim\n");
    break;
  } else {
    console.log("Aguardar a abertura do sinal para passar\n");

    semaforoAberto = true;
  }
}