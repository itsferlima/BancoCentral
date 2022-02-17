import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente"

const cliente1 = new Cliente();
cliente1.nome="Ricardo";
cliente1.cpf=11258459965;

const cliente2 = new Cliente();
cliente2.nome="Fer";
cliente2.cpf=956779865;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia =1001

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
