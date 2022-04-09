let salario_fixo, valor_por_carro_vendido, valor_de_vendas, numero_de_carros_vendidos, salario_final;

salario_fixo=parseFloat(prompt("Digite o salário fixo: "))
valor_de_vendas=parseFloat(prompt("Digite o valor ganho nas vendas: "))
valor_por_carro_vendido=parseFloat(prompt("Digte o valor por carro vendido: "))
numero_de_carros_vendidos=parseFloat(prompt("Quantidade de carros vendido: "))

salario_final= (valor_por_carro_vendido*numero_de_carros_vendidos) + (5/100*valor_de_vendas) + salario_fixo;

alert("Seu salário final é de: " + salario_final + "R$")
