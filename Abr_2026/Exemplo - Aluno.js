class Aluno {
    constructor (nome, nota) {
        this.nome  = nome
        this.nota = nota
    }

    mostrar_situacao() {
       if (this.nota >= 7 ){
        console.log(` O aluno ${this.nome} foi aprovado com nota ${this.nota}. \n------------------------------------`);
       }
       else {
        console.log(` O aluno ${this.nome} foi reprovado com nota ${this.nota}. \n------------------------------------`);
       }
    }
}

const aluno1 = new Aluno("ygor", 10)
const aluno2 = new Aluno("pedro", 4)

aluno1.mostrar_situacao();
aluno2.mostrar_situacao();