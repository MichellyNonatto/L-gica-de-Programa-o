let valor1, valor2, valor3;

valor1=parseInt(prompt("Inserir um valor inteiro: "))
valor2=parseInt(prompt("Inserir um valor inteiro: "))
valor3=parseInt(prompt("Inserir um valor inteiro: "))

//condição
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

if (valor1==valor2 || valor2==valor3 || valor3==valor1){
    alert("Valores iguais.")
}else if(valor1>valor2 & valor2>valor3){
    alert(valor3+" "+valor2+" "+valor1)
}else if(valor1>valor2 & valor2<valor3){
    alert(valor2+" "+valor3+" "+valor1)
}else if(valor1<valor2 & valor1>valor3 & valor2>valor3){
    alert(valor3+" "+valor1+" "+valor2)
}else if(valor2>valor1 & valor1<valor3 & valor2>valor3){
    alert(valor1+" "+valor3+" "+valor2)
}else if(valor3>valor2 & valor2<valor1){
    alert(valor2+" "+valor1+" "+valor3)
}else{
    alert(valor1+" "+valor2+" "+valor3)
}