let salario, reajuste, novo_salario;
salario=parseInt(prompt("Digite seu salário ATUAL."))
reajuste=parseInt(prompt("Digite o percentual do seu REAJUSTE salárial."))

novo_salario=(reajuste/100*salario)+salario;
alert("Seu novo salário é de: "+novo_salario+"R$")