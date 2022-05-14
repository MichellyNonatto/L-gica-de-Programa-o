let valor, acumuladora, maior, menor;
maior = 1;
menor = 9999999999;
valor = 1;    

console.log("Valores digitados: ")
while(valor>0){
    valor = parseInt(prompt("Insira um valor positivo : "));

    if(valor > maior){
        maior = valor;

    }else if(valor < menor){
        menor = valor;
    }else{}

    console.log(valor);
}
alert("O maior valor digitado é: "+maior+". E o menor valor digitado é: "+menor);
alert("Confira o histórico de valores em inspecionar");
console.log("O maior valor digitado é: "+maior+". E o menor valor digitado é: "+menor);
