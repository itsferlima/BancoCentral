class Cliente{
    nome;
    cpf;
    contaCorrente=ContaCorrente;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
} 

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo=100;
contaCorrenteRicardo.agencia=1001;
console.log(contaCorrenteRicardo.saldo);
let valorSacado=200;





cliente1.nome="Ricardo";
cliente1.cpf=11258459965;

cliente2.nome="Fer";
cliente2.cpf=956779865;

console.log(cliente1);
console.log(cliente2);