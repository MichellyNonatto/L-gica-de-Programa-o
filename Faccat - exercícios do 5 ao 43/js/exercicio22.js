let saldo, debito, credito, saldo_atual;

saldo=parseFloat(prompt("Digite o seu ultimo saldo: "))
debito=parseFloat(prompt("Digite o seu valor em débito: "))
credito=parseFloat(prompt("Digite o seu valor em crédito: "))

saldo_atual = saldo-debito+credito;

if (saldo<=0){
    alert("Seu saldo está negativado. Saldo igua á: " +saldo_atual+"R$")
}else{
    alert("Saldo positivo. Saldo igua á: " +saldo_atual+"R$")
}