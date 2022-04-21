let valor1, valor2;

valor1 = parseInt(prompt("Digite um valor: "))
valor2 = parseInt(prompt("Digite mais um valor: "))

if (valor1 < valor2) {
    alert("A ordem é: " + valor1 + " - " + valor2)
}else{
    alert("A ordem é: " + valor2 +" - "+ valor1)
}