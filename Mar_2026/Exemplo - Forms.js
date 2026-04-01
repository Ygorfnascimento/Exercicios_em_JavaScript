class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrar_prod(){
        console.log(`Nome:${this.nome}`);
        console.log(`Preço:${this.preco}`);
    }
}

const prod1 = new Produto ("banana", "12.00");
const prod2 = new Produto ("uva", "10.00");

prod1.mostrar_prod();
prod2.mostrar_prod();