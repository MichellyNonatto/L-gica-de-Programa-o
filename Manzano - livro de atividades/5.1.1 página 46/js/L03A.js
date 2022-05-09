let contadora, resultado, multiplicacao;

contadora = parseInt(prompt("Digite um número inteiro: "))
alert("O resultado será mostrado através do console.log. Vá inspecionar para conferir o resultado")
multiplicacao = 1;

while (multiplicacao < 11) {
    resultado = contadora*multiplicacao;
   console.log(contadora+" x "+multiplicacao+" = "+resultado);
    multiplicacao = multiplicacao+1;
}