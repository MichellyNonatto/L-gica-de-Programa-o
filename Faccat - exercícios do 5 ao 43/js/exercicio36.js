let nota1, nota2, nota3, media, media_de_aproveitamento;

nota1 = parseInt(prompt("Digite um valor de 0 á 10 da nota obtida na atividade: "))
nota2 = parseInt(prompt("Digite um valor de 0 á 10 da nota obtida na atividade: "))
nota3 = parseInt(prompt("Digite um valor de 0 á 10 da nota obtida na atividade: "))

media = (nota1 + nota2 + nota3)/3;

media_de_aproveitamento = (nota1 + nota2*2 + nota3*3 + media)/7;

if (media_de_aproveitamento >=9.0){
    alert("Parabéns! Você tirou um A.")
    
}else if(media_de_aproveitamento <9.0 && media_de_aproveitamento>=7.5){
    alert("Muito bem. Você tirou um B.")

}else if (media_de_aproveitamento<7.5 && media_de_aproveitamento>=6.0){
    alert("Você tirou um C, se esforce mais na próxima vez.")

}else{
    alert("Infelizmente você tirou um D. Pare de ser braço curto e vá estudar.")
}