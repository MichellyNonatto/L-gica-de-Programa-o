let valor1, valor2, valor3, soma;

valor1=parseInt(prompt("Inserir uma valor inteiro: "))
valor2=parseInt(prompt("Inserir uma valor inteiro: "))
valor3=parseInt(prompt("Inserir uma valor inteiro: "))

// condição
// 1 2 3
// 1 3 2
// 2 3 1
// 2 1 3
// 3 2 1
// 3 1 2

if(valor1==valor2 || valor2==valor3 || valor1==valor3){
    alert("Valores iguais")
}else if (valor1 > valor2 & valor2 > valor3){
   soma=valor1+valor2;
}else if (valor1 > valor2 & valor2 < valor3){
    soma=valor1+valor3;
}else if (valor1 < valor2 & valor1 > valor3){
    soma=valor2+valor1;
}else if (valor1 < valor2 & valor1 < valor3){
    soma=valor2+valor3;
}else if (valor3 > valor2 & valor2>valor1){
    soma=valor3+valor2;
}else{
    soma=valor3+valor1;
}

alert(soma)