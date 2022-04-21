let nota1,nota2,media;

nota1=parseInt(prompt("Digite a nota da sua primeira prova: "))
nota2=parseInt(prompt("Digite a nota da sua segunda prova: "))

media = (nota1 + nota2)/2

if (media>=6) {
    alert("Parabéns você foi aprovado!" + " A sua média foi de: " + media)
} else {
    alert("Se esforce mais na próxima vez." + " A sua média foi de: " + media)
}