//Preecher a tabela com os seguintes valores
// x    y   z   resposta
// 3    2   11     B
//150   3  455     C
// 7   -1   -2     A
//-2    5   -5     A
//50    3   155    C



let x,y;

x=parseInt(prompt("Digite um valor: "))
y=parseInt(prompt("Digite um valor: "))

z=(x*y)+5;
alert("O valor de Z é: " + z)

if (z <= 0){
    alert("Resposta A")
}else if(z<=100){
    alert("Resposta B")
}else{
    alert("Resposta C")
}

//preencher a tabela do HTML com o resultado do que for inserido no prompt.