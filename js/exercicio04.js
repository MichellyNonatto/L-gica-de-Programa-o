let ano,idade,ano_atual,dias_de_vida;
ano=parseInt(prompt("Digite o ANO de seu nascimento: "))
ano_atual=parseInt(prompt("Digite o ano ATUAL: "))

idade=ano_atual-ano;
dias_de_vida = idade*365;
alert("Você tem "+dias_de_vida+" dias de vividos.")