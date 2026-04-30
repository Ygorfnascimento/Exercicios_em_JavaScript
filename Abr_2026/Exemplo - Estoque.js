class Produto {
    constructor (nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    AtualizarPreco(novo_preco){
        novo_preco = this.preco;
    }

    AdicionarEstoque(atualizar_estoque){
        atualizar_estoque += this.quantidade;
    }

    Vender(vender_estoque){
        vender_estoque -= this.quantidade;

        if (this.quantidade <= 0){
            console.log(`O estoque está abaixo de 0. Não é possível vender.`);
        }
    }

    Exibir_info(){
        console.log(`O produto ${this.nome} custa R$ ${this.preco} reais e restam ${this.quantidade} unidades.`);
    }
}

const produto1 = new Produto("Uva", 10, 0)

produto1.Exibir_info();
produto1.Vender();