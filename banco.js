var Banco = {
    conta: "98713-7",
    saldo: 1989,
    tipo: "Conta Corrente",
    agencia: "1312",
  
    valorSaldo: function () {
      return `Seu saldo atual é R$${this.saldo}`;
    },
  
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      } else {
        return "Insira um valor.";
      }
    },
  
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      } else {
        return "Saldo insuficiente.";
      }
    },
  
    numeroConta: function () {
      return `O número da sua conta é ${this.conta}`;
    },
  };

console.log(Banco.valorSaldo()); 
console.log(Banco.deposito(900)); 
console.log(Banco.saque(240)); 
console.log(Banco.numeroConta()); 