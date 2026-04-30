class GerenciadorFinanceiro {
    constructor() {
        this.receitas = [];
        this.despesas = [];
    }

    adicionarReceita(descricao, valor) {
        this.receitas.push({ descricao, valor });
    }

    adicionarDespesa(descricao, valor) {
        this.despesas.push({ descricao, valor });
    }

    #somarValores(lista) {
        return lista.reduce((soma, item) => soma + item.valor, 0);
    }

    calcularSaldo() {
        const totalReceitas = this.#somarValores(this.receitas);
        const totalDespesas = this.#somarValores(this.despesas);
        return totalReceitas - totalDespesas;
    }

    formatarMoeda(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor);
    }

    verificarSaudeFinanceira() {
        const saldo = this.calcularSaldo();
        const status = saldo > 0 ? "No azul! 🔵" : (saldo === 0 ? "No limite! 🟡" : "No vermelho! 🔴");
        
        console.log(`--- Relatório ---`);
        console.log(`Saldo: ${this.formatarMoeda(saldo)}`);
        console.log(`Status: ${status}`);
    }
}

const marco = new GerenciadorFinanceiro();

marco.adicionarReceita("Salário", 2500);
marco.adicionarDespesa("Aluguel", 500);
marco.adicionarDespesa("Upgrade no Laptop", 4000); 

marco.verificarSaudeFinanceira();