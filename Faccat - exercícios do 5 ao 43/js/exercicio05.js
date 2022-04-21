let valido,branco,nulo,total_de_votos;
valido=parseFloat(prompt("Total de votos validos: "))
branco=parseFloat(prompt("Total de votos em branco: "))
nulo=parseFloat(prompt("Total de votos nulos: "))

total_de_votos = valido + branco + nulo;
alert("O total de votos foi " + total_de_votos + " com " + ((valido*100)/total_de_votos) + "% dos votos " + ((branco*100)/total_de_votos) + "% dos votos " + ((nulo*100)/total_de_votos) + "% dos votos")