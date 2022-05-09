let   valor, menor, maior;
menor = 999;
maior = 1;

do{
    valor = parseInt(prompt("Digite um valor: "));
    console.log(valor);

    if(valor > maior) {
        maior = valor;
    }
    
}while (valor > 0){
    if(valor < menor) {
        menor = valor;
    }
}
    
alert("O maior valor é: "+maior+" e o menor valor é: "+menor);
