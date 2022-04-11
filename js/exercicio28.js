let valor1, valor2, valor3;

valor1=parseInt(prompt("Digite um valor formar um triângulo: "))
valor2=parseInt(prompt("Digite um valor para formar um triângulo: "))
valor3=parseInt(prompt("Digite um valor para formar um triângulo: "))

if (valor1<=valor2+valor3 & valor2<=valor3+valor1 & valor3<=valor1+valor2){
    alert("Forma um triângulo.")
} else{
    alert("Não forma um triângulo")
}
