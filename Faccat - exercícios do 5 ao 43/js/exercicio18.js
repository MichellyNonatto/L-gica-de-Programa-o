let hora_inicial, hora_final,duracao;

hora_inicial=parseInt(prompt("Digite o número em horas do inicio de sua partida: "))

hora_final=parseInt(prompt("Digite o número em horas do fim de sua partida: "))

duracao=hora_final-hora_inicial;

if (duracao>24 || duracao<=0){
    alert("Jogo encerrado, duração maior que 24 horas.")
}else{
    alert("Seu jogo durou: " + duracao + " horas.")
}