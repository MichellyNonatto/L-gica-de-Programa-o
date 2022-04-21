let genero, altura;

genero=parseFloat(prompt("Indique seu gênero. 1 = feminino ou 2 = masculino: "))
altura=parseFloat(prompt("Qual é a sua altura: "))

if (genero==1){
    alert("Seu peso ideal é: " + ((62.1*altura)-44.7) + "Kg")
}else if (genero==2){
    alert("Seu peso ideal é: " + ((72.1*altura)-58) + "Kg")
}else{
    alert("Valor invalido.")
}