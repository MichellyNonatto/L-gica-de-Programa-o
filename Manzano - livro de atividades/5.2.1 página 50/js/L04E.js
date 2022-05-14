let contadora, valor, soma;
contadora = 1;
soma = 0;
 
while(contadora < 16){
    valor = parseInt(prompt("Digite um valor: "));
    console.log(valor);
    soma = soma + valor;
    contadora++
}
alert("A soma total dos 15 números digitados é: "+soma);
alert("O histórico de valores você pode conferir em inspecionar");