export class ContaCorrente{
    agencia;
    cliente;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<=0){         //early return 
            return;
        }
            this.saldo+=valor;
        }

    transferir(valor, conta){
        conta.cidade= "sao paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
