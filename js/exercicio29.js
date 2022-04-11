let time1, time2, gol1, gol2;

time1=prompt("Escreva o nome do time 1: ")
time2=prompt("Escreva o nome do time 2:")

gol1=parseInt(prompt("Quantos gols o "+time1+" fez?"))
gol2=parseInt(prompt("Quantos gols o "+time2+" fez?"))

if (gol1>gol2){
    alert("O "+time1+" ganhou do "+time2+" de "+gol1+" x "+gol2)
}else{
    alert("O "+time2+" ganhou do "+time1+" de "+gol2+" x "+gol1)
}