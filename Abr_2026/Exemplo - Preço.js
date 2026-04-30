const precos = [10, 20, 30, 40];

// Passo 1

const desconto = precos.map(preco => preco * 0.9);
console.log(desconto);

// Passo 2

const filtro = desconto.filter(preco => preco > 25);
console.log(filtro);

// Passo 3

const total = filtro.reduce((soma, valores) => soma + valores, 0);
console.log(total);

// Passo 4