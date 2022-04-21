let valor1,valor2;

valor1 = parseInt(prompt("Digite um valor inteiro: "))
valor2 = parseInt(prompt("Digite um novo valor inteiro: "))

if (valor1 > valor2){
    alert(valor1 + " é maior que " + valor2)
}else if (valor1 < valor2){
    alert(valor2 + " é maior que " + valor1)   
}else{
    alert("Os valores são iguais.")
}