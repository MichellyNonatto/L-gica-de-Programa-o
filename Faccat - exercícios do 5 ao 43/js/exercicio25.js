let valor1, valor2, valor3;

valor1 = parseInt(prompt("Inserir um valor inteiro: "))
valor2 = parseInt(prompt("Inserir um valor inteiro: "))
valor3 = parseInt(prompt("Inserir um valor inteiro: "))

if (valor1>valor2 & valor1>valor3){
    alert("O maior valor é "+valor1)
}else if (valor1==valor2 || valor2==valor3 || valor3==valor1){
    alert("Valor inválido, números iguais.")
}else if (valor1<valor2 & valor2>valor3){
    alert("O maior valor é "+valor2)
}else{
    alert("O maior valor é "+valor3)
}